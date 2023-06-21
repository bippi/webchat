import React from 'react';

export type FeedbackButtonIconProps = {
    positive: boolean,
    toggled: boolean,
};

export default function BotMessageFeedbackThumbIcon({ positive, toggled }: FeedbackButtonIconProps) {
    // TODO(Smári, STIFI-27):
    //     - Setja Stærð takka og lit í theme.
    //     - Færa þumla neðst hliðina á blöðru.
    //     - Setja aftur tooltip (title). (BotMessageFeedbackButton.props.hoverMsg)

    return (
        <div
            style={
                (!positive && !toggled) ? { transform: 'scale(-1, 1)' }
                : (!positive && toggled) ? { transform: 'scale(-1.35, 1.35)' }
                : (positive && !toggled) ? { transform: 'scale(1, -1)' }
                : (positive && toggled) ? { transform: 'scale(1.35, -1.35)' }
                : {}
            }
        >
            <svg
                xmlns='http://www.w3.org/2000/svg' 
                viewBox='0 0 12500 12500'
                width='15' 
                height='15'
            >
                <g
                    style={
                        (!positive && toggled) ? { fill: '#FF3333' }
                        : (positive && toggled) ? { fill: '#1FFF00' }
                        : {}
                    }
                >
                    <path d='M7726 12780C 7565 12743 7458 12686 7362 12587C 7224 12443 7160 12217 7160 11876C 7160 11801 7150 11669 7134 11548C 7034 10750 6885 10273 6642 9968C 6554 9859 6456 9765 6235 9580C 6125 9488 5981 9357 5915 9288C 5705 9070 5622 8934 5437 8500C 5083 7669 4874 7251 4625 6874C 4459 6623 4307 6451 4176 6364L4176 6364L4117 6325L3956 6319C 3735 6310 3666 6284 3557 6174C 3501 6117 3454 6028 3440 5951C 3434 5916 3430 5138 3430 3721C 3430 2174 3427 1490 3419 1354C 3384 793 3519 623 4055 556C 4238 533 5353 328 5765 242C 5978 197 6158 166 6300 151C 6505 128 7868 48 8365 30C 8530 24 8737 15 8825 10C 9031 -3 9320 -3 9468 10C 9533 15 9650 24 9730 30C 9912 44 10161 82 10316 120C 10719 218 11014 374 11321 653C 11580 887 11730 1097 11796 1317C 11820 1398 11823 1426 11830 1655C 11840 1990 11828 1964 12105 2250C 12320 2471 12408 2595 12464 2756C 12502 2864 12513 2948 12507 3088C 12501 3261 12480 3329 12310 3734C 12285 3794 12271 3841 12274 3854C 12277 3865 12334 3936 12401 4010C 12631 4266 12710 4391 12755 4575C 12785 4696 12786 4725 12760 4833C 12721 5000 12677 5094 12501 5379C 12446 5470 12400 5554 12400 5566C 12400 5578 12417 5610 12437 5637C 12646 5908 12696 5993 12737 6148C 12815 6445 12732 6767 12480 7149C 12260 7481 12041 7693 11795 7815C 11663 7880 11594 7903 11435 7935C 11041 8015 10437 8047 9575 8036C 9284 8032 8978 8025 8895 8021C 8813 8017 8739 8016 8733 8018C 8715 8024 8717 8046 8745 8139C 8788 8283 8858 8445 9027 8795C 9272 9298 9350 9479 9440 9750C 9569 10135 9618 10456 9607 10840C 9592 11370 9431 11821 9125 12189C 8889 12473 8515 12687 8130 12759C 8067 12771 7993 12785 7967 12790C 7899 12804 7818 12801 7726 12780zM8069 11979C 8158 11954 8289 11895 8357 11849C 8426 11802 8545 11685 8595 11615C 8682 11492 8760 11306 8798 11129C 8896 10674 8822 10208 8555 9605C 8523 9534 8430 9336 8348 9165C 8108 8669 8041 8508 7989 8306C 7935 8097 7916 7823 7943 7665C 7975 7487 8070 7352 8214 7284C 8327 7230 8393 7224 8709 7239C 9100 7258 10335 7265 10616 7251C 11129 7224 11379 7178 11517 7084C 11651 6992 11878 6692 11959 6501C 11988 6433 11997 6352 11980 6319C 11972 6306 11920 6233 11862 6157C 11738 5993 11679 5893 11643 5785C 11620 5715 11616 5689 11616 5575C 11616 5454 11618 5438 11648 5353C 11688 5235 11722 5170 11835 4985C 11964 4775 11980 4746 11980 4724C 11980 4702 11937 4649 11803 4502C 11579 4257 11497 4085 11497 3860C 11497 3698 11526 3595 11664 3269C 11700 3183 11733 3092 11736 3067C 11742 3026 11739 3015 11709 2968C 11691 2939 11600 2838 11509 2744C 11275 2504 11185 2376 11124 2198C 11079 2064 11068 1986 11061 1744L11061 1744L11055 1513L11027 1472C 10940 1347 10762 1175 10622 1081C 10586 1057 10513 1015 10461 989C 10000 757 9415 735 7210 865C 6310 918 6292 920 5915 1000C 5581 1070 4464 1279 4297 1302C 4252 1308 4212 1316 4207 1320C 4196 1330 4198 5532 4210 5544C 4215 5549 4257 5564 4302 5577C 4614 5668 4873 5887 5188 6328C 5486 6746 5731 7221 6144 8184C 6272 8482 6304 8546 6362 8625C 6442 8733 6522 8811 6730 8983C 6956 9171 7150 9359 7252 9490C 7572 9904 7755 10412 7869 11205C 7913 11513 7930 11673 7930 11781C 7930 11834 7933 11905 7936 11939C 7942 11996 7944 12000 7968 12000C 7982 12000 8028 11991 8069 11979z' />
                    <path d='M825 6580C 507 6537 240 6341 100 6049C 51 5945 23 5839 10 5701C 4 5634 0 4789 0 3375C 0 1174 0 1154 21 1046C 62 829 143 667 279 529C 413 394 575 306 758 268C 846 250 897 249 1633 252C 2412 255 2415 256 2495 278C 2679 330 2867 453 2980 596C 3055 691 3132 846 3162 965L3162 965L3185 1055L3185 3420L3185 5785L3159 5880C 3106 6069 3030 6199 2897 6327C 2805 6415 2710 6477 2596 6521C 2431 6585 2457 6583 1635 6586C 1223 6587 858 6584 825 6580zM2330 5794C 2394 5757 2406 5726 2415 5588C 2419 5521 2419 4490 2415 3297L2415 3297L2407 1129L2386 1098C 2374 1081 2352 1057 2337 1046C 2309 1025 2300 1025 1677 1022C 1329 1020 1007 1022 961 1025C 884 1031 875 1035 839 1067C 816 1088 796 1117 790 1140C 783 1165 781 1927 782 3436C 785 5675 785 5695 805 5729C 839 5787 872 5804 963 5811C 1008 5814 1326 5817 1670 5816C 2281 5815 2296 5815 2330 5794z' />
                </g>
            </svg>
        </div>
    );
}

BotMessageFeedbackThumbIcon.defaultProps = {
    positive: false,
    toggled: false,
}
