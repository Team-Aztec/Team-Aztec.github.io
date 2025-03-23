<script setup lang="ts"></script>

<template>
  <div id="background" style="--logo-color: #fff; --target: #8e652f; --line: #235535">
    <svg class="bg-decoration" viewBox="0 0 1000 1000" preserveaspectratio="xMidYMid slice">
      <defs>
        <linearGradient id="gradientColorDef">
          <stop style="stop-color: #f6b84e; stop-opacity: 1" offset="0.6" />
          <stop style="stop-color: #ffdd8b; stop-opacity: 1" offset="0.9" />
        </linearGradient>
        <linearGradient
          id="innerGradient"
          xlink:href="#gradientColorDef"
          x1="66"
          y1="495"
          x2="147"
          y2="542"
          gradientUnits="userSpaceOnUse"
          spreadMethod="reflect"
        />
        <linearGradient
          id="outerGradient"
          xlink:href="#gradientColorDef"
          x1="500"
          y1="500"
          x2="500"
          y2="800"
          gradientUnits="userSpaceOnUse"
          spreadMethod="reflect"
        >
          <animateTransform
            attributeName="gradientTransform"
            type="rotate"
            from="0 500 500"
            to="360 500 500"
            dur="5s"
            repeatCount="indefinite"
          />
        </linearGradient>
        <g id="logo-aztec">
          <path
            fill="#000F"
            d="M290,53L290,143L310,138V278L220,300V340L60,660
							C 225,1075 775,1076 940,660
							L 780,340 V 300 L 690,278 V 138 L710,143 710,53 L 500,0 Z"
          ></path>
          <path
            style="fill: var(--inner-fill, none); stroke-width: var(--stroke-width, 6); stroke: url(#innerGradient)"
            d="M300,60V130L500,80L700,130V60L500,10Z
							M320,150V260L350,252.5V170L460,142.5V225L490,217.5V107.5Z
							M365,180V248.75L385,243.75V195L425,185V233.75L445,228.75V160Z
							M680,150V260L650,252.5V170L540,142.5V225L510,217.5V107.5Z
							M635,180V248.75L615,243.75V195L575,185V233.75L555,228.75V160Z
							M230,307V340L200,400H250L270,360L500,302.5L730,360L750,400H800L770,340V307.5L500,240Z M500,240V302.5
							M190,420L120,560H170L240,420Z
							M110,580L70,660L95,710L160,580Z
							M290,380L100,760L275,920L470,335Z
							M500,370L470,460H530Z
							M455,490L425,580L500,570L575,580L545,490Z
							M410,610L380,700L500,710L620,700L590,610L500,600Z
							M365,730L335,820L500,840L665,820L635,730L500,740Z
							M320,850L295,925L500,980L705,925L680,850L500,870Z
							M530,335L725,920L900,760L710,380Z
							M760,420L830,560H880L810,420Z
							M840,580L905,710L930,660L890,580Z"
          ></path>
          <path
            style="fill: var(--outer-fill, url(#outerGradient))"
            d=" M285,80.30 A485,485 0,1,0 715,80.30 V133.33 A438.2,438.2 0,1,1 285,133.33 Z"
          ></path>
        </g>

        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="1" stitchTiles="stitch" />
        </filter>
        <g id="target">
          <path d="M0,-30L0,-5 M-30,0L-5,0 M5,0L30,0 M0,5L0,30" stroke="var(--target)" stroke-width="2" />
          <circle cx="0" cy="0" r="22" fill="none" stroke="var(--target)" stroke-width="2" />
          <circle cx="0" cy="0" r="16" fill="none" stroke="var(--target)" stroke-width="2" />
        </g>
      </defs>
      <path style="opacity: 0.25" fill="#F80" filter="url(#noiseFilter)" d="M0,0V1000H1000V0Z"></path>
    </svg>
    <!-- <svg class="bg-center bg-green-box" viewbox="0 0 100 100" preserveAspectRatio="none">
      <path
        class="bg-green"
        d="M0,0L100,100 M100,0L0,100 M50,0L50,100 M0,50L100,50"
        stroke-width="2"
        vector-effect="non-scaling-stroke"
      ></path>
    </svg> -->
    <!-- <svg class="bg-arrow bg-arrow-top" viewbox="0 0 70 70" preserveaspectratio="xMidYMax meet">
      <path class="bg-arrow-path" d="M23,23L47,47 M23,43L23,23L43,23"></path>
    </svg> -->
    <!-- <div class="bg-green-box bg-top"></div>
    <div class="bg-green-box bg-top"></div>
    <div class="bg-green-box bg-top bg-right"></div>
    <div class="bg-green-box bg-left"></div>
    <div class="bg-green-box bg-right"></div>
    <div class="bg-green-box bg-left"></div>
    <div class="bg-green-box bg-right"></div>
    <div class="bg-green-box bg-bottom bg-left"></div>
    <div class="bg-green-box bg-bottom"></div>
    <div class="bg-green-box bg-bottom"></div>
    <svg class="bg-arrow" viewbox="0 0 70 70">
      <path class="bg-arrow-path" d="M23,23L47,47 M27,47L47,47L47,27"></path>
    </svg> -->
    <svg class="bg-logo" viewBox="0 0 1000 1000" preserveaspectratio="xMidYMid slice">
      <use xlink:href="#logo-aztec"></use>
    </svg>
  </div>
</template>

<style scoped lang="scss">
  #background {
    position: absolute;
    z-index: -1;
    top: 0;
    height: 100%;
    width: 100%;
    margin-bottom: -100vh;
    overflow: hidden;
    background: #000;
    display: grid;
    grid-template: calc(70px + 65px) 1fr 1fr 70px / 70px 1fr 1fr 70px;
  }

  .bg-arrow {
    background: #f6a429;
    height: 100%;
    width: 100%;

    &-top {
      padding-top: 95%;
      height: 50%;
    }
  }
  .bg-arrow-path {
    fill: none;
    stroke: black;
    stroke-width: 2;
  }

  .bg-center {
    grid-area: 2/2/4/4;
    height: 100%;
    width: 100%;
  }

  .bg-green {
    stroke: var(--line);
  }

  .bg-green-box {
    border: solid 1px var(--line);
    box-sizing: border-box;
  }

  .bg-left {
    border-left-width: 0;
  }
  .bg-right {
    border-right-width: 0;
  }
  .bg-top {
    border-top-width: 0;
  }
  .bg-bottom {
    border-bottom-width: 0;
  }

  .bg-logo {
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    max-height: 160vmin;
    max-width: 160vmin;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.08;
    filter: grayscale(1) blur(0.7px);
    transition: opacity 250ms ease-out;
  }

  .bg-decoration {
    position: absolute;
    width: 100%;
  }
  /* height: 100%; */

  .bg-moving-target {
    transition: transform 10s ease-in-out;
  }
</style>
