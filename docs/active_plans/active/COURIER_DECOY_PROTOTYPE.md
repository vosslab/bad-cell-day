# Courier and Decoy: private room prototype

Promotion pointer: Root accepted the frozen candidate as campaign level_58, **The Liver-y Service**,
directly after level_28 and before level_15, as `DONE_WITH_CONCERNS` at 2026-10-18 23:13:33 UTC.
The rest of this ledger preserves its private-prototype review and original evidence. See [the level
definition](../../../src/level_livery_service.ts), [delivery ledger](LIVERY_SERVICE.md), and
[registered native evidence](../../../tests/_temp/livery_service_delivery/NATIVE_EVIDENCE.md). The
private fixture and its original traces remain unchanged.

## Decision state at prototype review

This is a private, temporary `LevelDefinition` fixture for review. It is not a promoted room. The room is titled **The Liver-y Service**: Pac pushes a light nutrient sac along the safe lower route while Isp can cross the upper folds and draw Cana's nearest-player boomerang away from the cargo. Both routes meet at WEIGH 3, which opens access to two separate exits. Cana rides a moving fold and keeps throwing; Gem repeatedly telegraphs and releases bubbles near the dock.

The intended cooperative choice is tactical, not exclusive. Isp's decoy changes Cana's locked target and gives Pac a quieter delivery. Pac may also carry Isp, and the unbaited route remains possible at the cost of a cargo hit and recovery. The pad requires the delivered sac and both heroes at once; after its latch opens, both villains remain active.

## Geometry and play trace

The lower route is a continuous safe floor. Pac is immune to the Isp-only fluid patch that makes the lower lane costly to Isp. Isp uses upper ledges with intended rises of about 70 px, crosses Cana's horizontal moving fold, then drops onto the broad far dock. The fold spans x=545-715 and carries Cana. A short exit barrier blocks the final access until the latch opens. The two exit rectangles are separated and readable; the WEIGH platform is directly accessible from the dock.

In the ordinary-input clear, Isp takes the upper route while Pac pushes the sac below. Cana's windup locks onto Isp at frame 151, and the attack releases at frame 229. Gem's first bubble releases at frame 325 and recurs at frame 739. Pac delivers the sac; both heroes and the sac register weight 3 at frame 524, opening exit access. Pac's first close jump bumps the sac but causes no death or reset: Pac backs up, retries, and both separate exit checks complete at frame 765. This demonstrates one recoverable mistake and one full clear from a fresh state.

The bounded no-decoy counterfactual first moves Isp left out of Pac's path, then lets Pac approach the parcel without Isp baiting Cana. Cana locks onto Pac at frame 151. Her boomerang contacts and nudges the sac around frames 331-343. Ordinary movement then resumes: Isp crosses the upper route, Pac recovers and pushes the sac, and the same attempt activates WEIGH 3 at frame 922. This shows the decoy's concrete benefit and that the alternative remains recoverable. The short continuation did **not** complete both exits: after trying the exit approach, the final state is still `playing`, with no death/reset and the latch still open. Do not count it as a second clear.

## Evidence and limits

Run with:

```sh
npx tsx tests/_temp/courier_decoy_prototype/runner.mjs
```

The runner creates a fresh state for each scenario and advances only with ordinary `create_empty_input` / `step_game` calls at 1/120 s. It records compact checkpoints and relevant events, including Cana's movement and aim lock, attack releases, boomerang cargo contacts, WEIGH activation, access opening, supports, and exit status. No state injection or attack suppression is used.

Fixture identity (SHA-256):

- `fixture.mts`: `892c788ddb3dc2522b4e7fd2adb02212da40e83464d673ee07eb35c4f8a8b2c1`
- `inputs.json`: `bc2c8f952438294ba018aba8a5a57e40cf70375865ff3b60723290fb59e40d17`
- `runner.mjs`: `5187054589e3ac4c319a0e604216262f61a5129b9a35d55cf08aea1cce37dd32`

This is engine-level evidence only. No browser/rendering, human playtest, broader bypass search, build, or campaign run has been performed. Visual readability, fun, and discovery remain unverified; review the private fixture and trace before deciding whether to revise or promote it.
