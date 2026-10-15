# Final campaign input playthrough

All eight final levels complete without deaths in the successful recorded runs. Each run uses fresh `create_game_state`, ordinary directional/jump inputs, and `step_game` at 120 Hz. The controller reads state to choose action timing; it never changes simulation state. Each emitted key-only replay runs from a second fresh state without coordinate checks and deep-equals its original final state.

Historical executed command: `node --import tsx tests/_temp/final_playthrough.mjs` (exit 0). An optional number selected one level. Full machine-readable output was written to `/private/tmp/final_playthrough_results.json`; every record includes input intervals and action coordinates. Failed exploratory controller attempts preceded these successful runs; this proves a death-free route exists, not that a first-time player will avoid every failure. No product changes were needed.

| Level | Frames | Seconds | Outcome | Boss |
| --- | ---: | ---: | --- | --- |
| level_13 | 1183 | 9.858 | complete | not applicable |
| level_14 | 1163 | 9.692 | complete | not applicable |
| level_15 | 1072 | 8.933 | complete | not applicable |
| level_16 | 1128 | 9.400 | complete | defeated |
| level_17 | 2516 | 20.967 | complete | not applicable |
| level_18 | 639 | 5.325 | complete | not applicable |
| level_19 | 1139 | 9.492 | complete | defeated |
| level_20 | 1188 | 9.900 | complete | defeated |

Coordinates below are player top-left pixels after each action. `wait` includes a condition-based period with neutral input unless preceded by an explicit combined push. Level 15 WEIGH is reached with both right keys held until the heavy parcel reaches x330. Level 17 waits for a low lift before Pac boards and for a high lift before disembarking. Level 13 waits for the safe slime pulse window. Level 18 and 20 include vertical jump preparation to clear shelf undersides.

The route must avoid pushing the parked partner off a hold pad: jump over them. A released jump input must receive a simulation tick before the next jump press. For browser playback, replay the intervals below at 120 Hz; intervals use exclusive end frames. Arrow keys control Pac and a/d/w control Isp.

## level_13

| Action | End frame | Isp x,y | Pac x,y | Active pads |
| --- | ---: | --- | --- | --- |
| isp move to 185 | 72 | 184.250, 464.000 | 214.250, 464.000 | open |
| pac move to 425 | 192 | 184.250, 464.000 | 424.250, 464.000 | open |
| wait | 192 | 184.250, 464.000 | 424.250, 464.000 | open |
| pac move to 665 | 330 | 184.250, 464.000 | 665.750, 464.000 | open, rescue |
| pac move to 1035 | 541 | 184.250, 464.000 | 1035.000, 464.000 | open, rescue |
| isp move to 425 | 679 | 425.750, 464.000 | 1035.000, 464.000 | rescue |
| wait | 900 | 425.750, 464.000 | 1035.000, 464.000 | rescue |
| isp move to 955 | 1183 | 921.000, 464.000 | 1035.000, 464.000 | rescue |

Fixed input intervals `[start, end, keys]`:

```json
[[0,1,[]],[1,72,["d"]],[72,541,["ArrowRight"]],[541,679,["d"]],[679,900,[]],[900,1183,["d"]]]
```

## level_14

| Action | End frame | Isp x,y | Pac x,y | Active pads |
| --- | ---: | --- | --- | --- |
| pac move to 185 | 38 | 60.000, 464.000 | 184.750, 464.000 | open |
| isp move to 140 | 84 | 140.500, 464.000 | 184.750, 464.000 | open |
| isp jump to 280 | 165 | 280.500, 420.667 | 189.750, 464.000 | open |
| isp move to 280 | 178 | 280.500, 464.000 | 189.750, 464.000 | open |
| isp jump to 380 | 244 | 380.000, 388.167 | 189.750, 464.000 | open |
| isp move to 450 | 288 | 450.000, 394.000 | 189.750, 464.000 | open |
| isp jump to 600 | 375 | 600.500, 368.917 | 189.750, 464.000 | open |
| isp move to 690 | 433 | 689.750, 394.000 | 189.750, 464.000 | open |
| isp jump to 815 | 506 | 815.750, 331.000 | 189.750, 464.000 | open |
| isp move to 955 | 623 | 955.750, 464.000 | 189.750, 464.000 | open, rescue |
| pac move to 280 | 675 | 955.750, 464.000 | 280.750, 464.000 | rescue |
| pac jump to 380 | 741 | 955.750, 464.000 | 380.000, 388.167 | rescue |
| pac move to 450 | 785 | 955.750, 464.000 | 450.000, 394.000 | rescue |
| pac jump to 600 | 872 | 955.750, 464.000 | 600.500, 368.917 | rescue |
| pac move to 690 | 930 | 955.750, 464.000 | 689.750, 394.000 | rescue |
| pac jump to 815 | 1003 | 955.750, 464.000 | 815.750, 331.000 | rescue |
| pac move to 900 | 1088 | 955.750, 464.000 | 899.750, 464.000 | rescue |
| pac jump to 1035 | 1163 | 955.750, 464.000 | 1029.250, 405.417 | rescue |

Fixed input intervals `[start, end, keys]`:

```json
[[0,1,[]],[1,38,["ArrowRight"]],[38,84,["d"]],[84,85,[]],[85,165,["d","w"]],[165,179,[]],[179,244,["d","w"]],[244,248,[]],[248,288,["d"]],[288,289,[]],[289,375,["d","w"]],[375,382,[]],[382,433,["d"]],[433,434,[]],[434,506,["d","w"]],[506,543,[]],[543,623,["d"]],[623,675,["ArrowRight"]],[675,676,[]],[676,741,["ArrowRight","ArrowUp"]],[741,745,[]],[745,785,["ArrowRight"]],[785,786,[]],[786,872,["ArrowRight","ArrowUp"]],[872,879,[]],[879,930,["ArrowRight"]],[930,931,[]],[931,1003,["ArrowRight","ArrowUp"]],[1003,1040,[]],[1040,1088,["ArrowRight"]],[1088,1089,[]],[1089,1163,["ArrowRight","ArrowUp"]]]
```

## level_15

| Action | End frame | Isp x,y | Pac x,y | Active pads |
| --- | ---: | --- | --- | --- |
| pac move to 190 | 30 | 80.000, 464.000 | 190.000, 464.000 |  |
| isp move to 160 | 76 | 160.000, 464.000 | 190.000, 464.000 |  |
| wait | 139 | 270.250, 464.000 | 300.250, 464.000 | weigh |
| pac move to 300.25 | 139 | 270.250, 464.000 | 300.250, 464.000 | weigh |
| pac jump to 400 | 209 | 270.250, 464.000 | 400.000, 395.000 | weigh |
| isp move to 270.25 | 233 | 270.250, 464.000 | 400.000, 464.000 | weigh |
| isp jump to 400 | 308 | 399.750, 405.417 | 400.000, 464.000 | weigh |
| pac move to 510 | 380 | 399.750, 464.000 | 510.250, 464.000 | weigh, steady |
| isp move to 450 | 409 | 450.500, 464.000 | 510.250, 464.000 | weigh, steady |
| isp jump to 560 | 473 | 560.750, 385.250 | 510.250, 464.000 | weigh, steady |
| isp move to 930 | 714 | 930.000, 464.000 | 510.250, 464.000 | weigh, steady, rescue |
| isp move to 995 | 751 | 994.750, 464.000 | 510.250, 464.000 | weigh, steady, rescue |
| pac move to 940 | 997 | 994.750, 464.000 | 940.750, 464.000 | weigh, rescue |
| pac jump to 1055 | 1063 | 994.750, 464.000 | 1054.500, 388.167 | weigh, rescue |

Fixed input intervals `[start, end, keys]`:

```json
[[0,1,[]],[1,30,["ArrowRight"]],[30,76,["d"]],[76,139,["d","ArrowRight"]],[139,140,[]],[140,209,["ArrowRight","ArrowUp"]],[209,234,[]],[234,308,["d","w"]],[308,317,[]],[317,380,["ArrowRight"]],[380,409,["d"]],[409,410,[]],[410,473,["d","w"]],[473,503,[]],[503,751,["d"]],[751,997,["ArrowRight"]],[997,998,[]],[998,1063,["ArrowRight","ArrowUp"]],[1063,1072,[]]]
```

## level_16

| Action | End frame | Isp x,y | Pac x,y | Active pads |
| --- | ---: | --- | --- | --- |
| isp move to 115 | 41 | 115.000, 414.000 | 145.000, 414.000 | stop |
| pac move to 185 | 64 | 115.000, 414.000 | 185.250, 414.000 | stop |
| pac jump to 310 | 136 | 115.000, 414.000 | 309.500, 348.917 | stop |
| pac move to 410 | 215 | 115.000, 414.000 | 409.250, 414.000 | stop |
| pac jump to 535 | 288 | 115.000, 414.000 | 535.250, 351.000 | stop |
| pac move to 560 | 323 | 115.000, 414.000 | 559.750, 414.000 | stop, steady |
| isp move to 185 | 363 | 185.000, 414.000 | 559.750, 414.000 | steady |
| isp jump to 310 | 435 | 309.250, 348.917 | 559.750, 414.000 | steady |
| isp move to 409.3333333333333 | 509 | 408.917, 414.000 | 559.750, 414.000 | steady |
| isp move to 408.9166666666663 | 509 | 408.917, 414.000 | 559.750, 414.000 | steady |
| isp jump to 535 | 582 | 535.250, 351.000 | 559.750, 414.000 | steady |
| isp move to 610 | 636 | 610.500, 384.500 | 559.750, 414.000 | steady |
| isp move to 955 | 833 | 955.250, 414.000 | 559.750, 414.000 | steady, rescue, blue_target |
| pac move to 915 | 1036 | 955.250, 414.000 | 915.000, 414.000 | rescue, blue_target |
| pac jump to 1045 | 1111 | 964.250, 414.000 | 1044.500, 355.417 | rescue, blue_target |

Fixed input intervals `[start, end, keys]`:

```json
[[0,1,[]],[1,41,["d"]],[41,64,["ArrowRight"]],[64,65,[]],[65,136,["ArrowRight","ArrowUp"]],[136,158,[]],[158,215,["ArrowRight"]],[215,216,[]],[216,288,["ArrowRight","ArrowUp"]],[288,309,[]],[309,323,["ArrowRight"]],[323,363,["d"]],[363,364,[]],[364,435,["d","w"]],[435,457,[]],[457,509,["d"]],[509,510,[]],[510,582,["d","w"]],[582,593,[]],[593,833,["d"]],[833,1036,["ArrowRight"]],[1036,1037,[]],[1037,1111,["ArrowRight","ArrowUp"]],[1111,1128,[]]]
```

## level_17

| Action | End frame | Isp x,y | Pac x,y | Active pads |
| --- | ---: | --- | --- | --- |
| pac move to 135 | 10 | 60.000, 514.000 | 135.750, 514.000 | open |
| isp move to 85 | 24 | 84.500, 514.000 | 135.750, 514.000 | open |
| isp jump to 210 | 97 | 210.500, 451.000 | 135.750, 514.000 | open |
| isp move to 210 | 118 | 210.500, 514.000 | 135.750, 514.000 | open |
| isp jump to 300 | 174 | 300.000, 426.917 | 135.750, 514.000 | open |
| wait | 529 | 300.000, 328.850 | 135.750, 514.000 | open |
| isp move to 300 | 529 | 300.000, 328.850 | 135.750, 514.000 | open |
| isp jump to 500 | 644 | 499.500, 304.000 | 135.750, 514.000 | open, rescue |
| isp move to 535 | 664 | 534.500, 304.000 | 135.750, 514.000 | open, rescue |
| pac move to 210 | 706 | 534.500, 304.000 | 209.250, 514.000 | rescue |
| wait | 1115 | 534.500, 304.000 | 209.250, 514.000 | rescue |
| pac move to 210 | 1115 | 534.500, 304.000 | 209.250, 514.000 | rescue |
| pac jump to 300 | 1168 | 534.500, 304.000 | 300.250, 425.167 | rescue |
| wait | 1729 | 534.500, 304.000 | 300.250, 328.850 | rescue |
| pac move to 300.25 | 1729 | 534.500, 304.000 | 300.250, 328.850 | rescue |
| pac jump to 470 | 1827 | 534.500, 304.000 | 470.000, 304.000 | rescue |
| pac move to 480 | 1833 | 534.500, 304.000 | 480.500, 304.000 | rescue |
| pac jump to 590 | 1897 | 534.500, 304.000 | 590.750, 225.250 | rescue |
| pac move to 590 | 1927 | 534.500, 304.000 | 590.750, 304.000 | rescue |
| pac jump to 695 | 1988 | 534.500, 304.000 | 695.750, 221.500 | rescue |
| pac move to 790 | 2091 | 534.500, 304.000 | 790.250, 374.000 | rescue |
| pac jump to 890 | 2157 | 534.500, 304.000 | 890.000, 298.167 | rescue |
| pac move to 1035 | 2244 | 534.500, 304.000 | 1035.250, 304.000 | rescue |
| isp move to 570 | 2264 | 569.500, 304.000 | 1035.250, 304.000 | rescue |
| isp jump to 695 | 2337 | 695.500, 241.000 | 1035.250, 304.000 | rescue |
| isp move to 790 | 2428 | 790.000, 374.000 | 1035.250, 304.000 | rescue |
| isp jump to 890 | 2494 | 890.000, 298.167 | 1035.250, 304.000 | rescue |
| isp move to 955 | 2516 | 921.500, 304.000 | 1035.250, 304.000 | rescue |

Fixed input intervals `[start, end, keys]`:

```json
[[0,1,[]],[1,10,["ArrowRight"]],[10,24,["d"]],[24,25,[]],[25,97,["d","w"]],[97,119,[]],[119,174,["d","w"]],[174,530,[]],[530,644,["d","w"]],[644,664,["d"]],[664,706,["ArrowRight"]],[706,1116,[]],[1116,1168,["ArrowRight","ArrowUp"]],[1168,1730,[]],[1730,1827,["ArrowRight","ArrowUp"]],[1827,1833,["ArrowRight"]],[1833,1834,[]],[1834,1897,["ArrowRight","ArrowUp"]],[1897,1928,[]],[1928,1988,["ArrowRight","ArrowUp"]],[1988,2037,[]],[2037,2091,["ArrowRight"]],[2091,2092,[]],[2092,2157,["ArrowRight","ArrowUp"]],[2157,2161,[]],[2161,2244,["ArrowRight"]],[2244,2264,["d"]],[2264,2265,[]],[2265,2337,["d","w"]],[2337,2374,[]],[2374,2428,["d"]],[2428,2429,[]],[2429,2494,["d","w"]],[2494,2498,[]],[2498,2516,["d"]]]
```

## level_18

| Action | End frame | Isp x,y | Pac x,y | Active pads |
| --- | ---: | --- | --- | --- |
| pac move to 1010 | 1 | 60.000, 464.000 | 1010.000, 464.000 | steady |
| isp move to 180 | 70 | 180.750, 464.000 | 1010.000, 464.000 | steady |
| isp jump to 255 | 133 | 254.750, 383.917 | 1010.000, 464.000 | steady |
| isp move to 300 | 166 | 300.250, 394.000 | 1010.000, 464.000 | steady |
| isp jump to 390 | 218 | 389.500, 304.750 | 1010.000, 464.000 | steady |
| isp move to 540 | 316 | 539.625, 324.000 | 1010.000, 464.000 | steady |
| isp move to 540 | 316 | 539.625, 324.000 | 1010.000, 464.000 | steady |
| isp jump to 670 | 391 | 669.375, 265.417 | 1010.000, 464.000 | steady |
| isp move to 795 | 482 | 795.375, 324.000 | 1010.000, 464.000 | steady, rescue |
| pac move to 910 | 539 | 795.375, 324.000 | 910.250, 464.000 | rescue |
| pac move to 980 | 601 | 795.375, 324.000 | 980.250, 394.000 | rescue |
| pac move to 980 | 601 | 795.375, 324.000 | 980.250, 394.000 | rescue |
| pac jump to 885 | 639 | 795.375, 324.000 | 915.500, 307.667 | rescue |
| isp move to 785 | 639 | 795.375, 324.000 | 915.500, 307.667 | rescue |

Fixed input intervals `[start, end, keys]`:

```json
[[0,1,[]],[1,70,["d"]],[70,71,[]],[71,133,["d","w"]],[133,140,[]],[140,166,["d"]],[166,167,[]],[167,218,["d","w"]],[218,236,[]],[236,316,["d"]],[316,317,[]],[317,391,["d","w"]],[391,410,[]],[410,482,["d"]],[482,539,["ArrowLeft"]],[539,561,["ArrowUp"]],[561,601,["ArrowRight"]],[601,602,[]],[602,639,["ArrowLeft","ArrowUp"]]]
```

## level_19

| Action | End frame | Isp x,y | Pac x,y | Active pads |
| --- | ---: | --- | --- | --- |
| isp move to 135 | 52 | 134.250, 464.000 | 164.250, 464.000 | stop |
| pac move to 195 | 70 | 134.250, 464.000 | 195.750, 464.000 | stop |
| pac jump to 320 | 142 | 134.250, 464.000 | 320.000, 398.917 | stop |
| pac move to 425 | 224 | 134.250, 464.000 | 425.000, 464.000 | stop |
| pac jump to 570 | 308 | 134.250, 464.000 | 570.250, 394.000 | stop |
| pac move to 620 | 336 | 134.250, 464.000 | 619.250, 394.000 | stop, steady |
| isp move to 195 | 371 | 195.500, 464.000 | 619.250, 394.000 | stop, steady |
| isp jump to 320 | 443 | 319.750, 398.917 | 619.250, 394.000 | steady |
| isp move to 435.375 | 527 | 436.000, 464.000 | 619.250, 394.000 | steady |
| isp move to 435.99999999999994 | 527 | 436.000, 464.000 | 619.250, 394.000 | steady |
| isp jump to 570 | 604 | 569.250, 394.000 | 619.250, 394.000 | steady |
| isp move to 555 | 612 | 555.250, 394.000 | 619.250, 394.000 | steady |
| isp jump to 690 | 690 | 690.000, 342.667 | 619.250, 394.000 | steady |
| isp move to 690 | 706 | 690.000, 394.000 | 619.250, 394.000 | steady |
| isp jump to 760 | 766 | 759.500, 310.417 | 619.250, 394.000 | steady |
| isp move to 845 | 825 | 845.250, 324.000 | 619.250, 394.000 | steady, rescue, blue_target |
| pac move to 690 | 865 | 845.250, 324.000 | 689.250, 394.000 | rescue, blue_target |
| pac jump to 780 | 937 | 845.250, 324.000 | 780.500, 324.000 | rescue, blue_target |
| pac move to 780 | 937 | 845.250, 324.000 | 780.500, 324.000 | rescue, blue_target |
| pac jump to 900 | 1006 | 845.250, 324.000 | 899.500, 253.167 | rescue, blue_target |
| pac move to 900 | 1031 | 845.250, 324.000 | 899.500, 324.000 | rescue, blue_target |
| pac jump to 1005 | 1092 | 845.250, 324.000 | 1004.500, 241.500 | rescue, blue_target |
| pac move to 1025 | 1139 | 845.250, 324.000 | 1004.500, 386.417 | rescue, blue_target, orange_target |

Fixed input intervals `[start, end, keys]`:

```json
[[0,1,[]],[1,52,["d"]],[52,70,["ArrowRight"]],[70,71,[]],[71,142,["ArrowRight","ArrowUp"]],[142,164,[]],[164,224,["ArrowRight"]],[224,225,[]],[225,308,["ArrowRight","ArrowUp"]],[308,336,["ArrowRight"]],[336,371,["d"]],[371,372,[]],[372,443,["d","w"]],[443,465,[]],[465,527,["d"]],[527,528,[]],[528,604,["d","w"]],[604,612,["a"]],[612,613,[]],[613,690,["d","w"]],[690,707,[]],[707,766,["d","w"]],[766,776,[]],[776,825,["d"]],[825,865,["ArrowRight"]],[865,866,[]],[866,937,["ArrowRight","ArrowUp"]],[937,938,[]],[938,1006,["ArrowRight","ArrowUp"]],[1006,1032,[]],[1032,1092,["ArrowRight","ArrowUp"]],[1092,1139,[]]]
```

## level_20

| Action | End frame | Isp x,y | Pac x,y | Active pads |
| --- | ---: | --- | --- | --- |
| isp move to 115 | 41 | 115.000, 484.000 | 145.000, 484.000 | stop |
| pac move to 185 | 64 | 115.000, 484.000 | 185.250, 484.000 | stop |
| pac jump to 310 | 151 | 115.000, 484.000 | 310.417, 414.000 | stop |
| pac move to 410 | 208 | 115.000, 484.000 | 410.167, 414.000 | stop |
| pac jump to 535 | 280 | 115.000, 484.000 | 534.417, 348.917 | stop |
| pac move to 560 | 317 | 115.000, 484.000 | 560.667, 414.000 | stop, steady |
| isp move to 185 | 357 | 185.000, 484.000 | 560.667, 414.000 | steady |
| isp jump to 310 | 440 | 310.083, 414.000 | 560.667, 414.000 | steady |
| isp move to 407.5 | 491 | 407.833, 414.000 | 560.667, 414.000 | steady |
| isp move to 407.8333333333327 | 491 | 407.833, 414.000 | 560.667, 414.000 | steady |
| isp jump to 535 | 564 | 534.167, 351.000 | 560.667, 414.000 | steady |
| isp move to 610 | 618 | 609.417, 383.500 | 560.667, 414.000 | steady |
| isp move to 865 | 764 | 864.917, 414.000 | 560.667, 414.000 | steady |
| isp jump to 915 | 816 | 915.500, 324.750 | 560.667, 414.000 | steady |
| isp move to 915 | 834 | 915.500, 344.000 | 560.667, 414.000 | steady, rescue |
| isp move to 975 | 890 | 974.250, 257.667 | 560.667, 414.000 | steady, rescue |
| pac move to 860 | 1074 | 974.250, 274.000 | 859.917, 414.000 | rescue, blue_target |
| pac move to 860 | 1074 | 974.250, 274.000 | 859.917, 414.000 | rescue, blue_target |
| pac jump to 1035 | 1188 | 974.250, 274.000 | 1011.000, 344.000 | rescue, blue_target, orange_target |
| isp move to 980 | 1188 | 974.250, 274.000 | 1011.000, 344.000 | rescue, blue_target, orange_target |

Fixed input intervals `[start, end, keys]`:

```json
[[0,1,[]],[1,41,["d"]],[41,64,["ArrowRight"]],[64,65,[]],[65,151,["ArrowRight","ArrowUp"]],[151,208,["ArrowRight"]],[208,209,[]],[209,280,["ArrowRight","ArrowUp"]],[280,302,[]],[302,317,["ArrowRight"]],[317,357,["d"]],[357,358,[]],[358,440,["d","w"]],[440,491,["d"]],[491,492,[]],[492,564,["d","w"]],[564,575,[]],[575,764,["d"]],[764,765,[]],[765,816,["d","w"]],[816,834,[]],[834,856,["w"]],[856,890,["d"]],[890,903,[]],[903,1074,["ArrowRight"]],[1074,1075,[]],[1075,1188,["ArrowRight","ArrowUp"]]]
```
