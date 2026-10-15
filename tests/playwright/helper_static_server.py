#!/usr/bin/env python3
"""Serve the built game for local Playwright journeys over loopback HTTP."""

# Standard Library
import socket
import pathlib
import argparse
import functools
import http.server


class PlaywrightHTTPServer(http.server.ThreadingHTTPServer):
	"""Use the platform pending-connection queue for concurrent browser loads."""

	# ASVS 13.1.2: this is the pending listen queue, not a cap on active request threads.
	# Saturation remains a transport failure; requests are not retried or replaced.
	request_queue_size = socket.SOMAXCONN


#============================================
def parse_args() -> argparse.Namespace:
	"""Validate the port and existing build directory before opening a socket."""
	parser = argparse.ArgumentParser(description=__doc__)
	parser.add_argument('-p', '--port', dest='port', type=int, required=True)
	parser.add_argument('-d', '--directory', dest='directory', type=pathlib.Path, required=True)
	args = parser.parse_args()
	# ASVS 2.2.1: reject invalid startup inputs rather than changing their meaning.
	if not 1 <= args.port <= 65535:
		parser.error('port must be from 1 to 65535')
	if not args.directory.is_dir():
		parser.error(f'directory does not exist or is not a directory: {args.directory}')
	return args


#============================================
def main() -> None:
	"""Run a managed HTTP/1.0 server with visible startup and bind failures."""
	args = parse_args()
	handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(args.directory))
	# ASVS 13.1.3 / 16.5.3: close the listener on exit; startup failures stay nonzero.
	with PlaywrightHTTPServer(('127.0.0.1', args.port), handler) as server:
		print(f'Serving {args.directory} at http://127.0.0.1:{args.port}/')
		try:
			server.serve_forever()
		except KeyboardInterrupt:
			pass


if __name__ == '__main__':
	main()
