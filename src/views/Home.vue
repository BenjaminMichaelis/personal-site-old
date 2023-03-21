<template>
  <v-container class="fill-height" fluid>
    <v-row no-gutters class="fill-height">
      <v-col>
        <v-card flat order="first">
          <span class="intro-message">
            <h1 class="bounceDown font-weight-thin text-lg">
              Benjamin Michaelis
            </h1>
            <h3 class="bounce font-weight-bold mt-5">Software Engineer</h3>
          </span>
        </v-card>
      </v-col>
      <v-col>
        <v-img :max-width="300" cover src="../assets/avatar/avatar.png"></v-img>
      </v-col>
      <v-col order="last">
        <p>
          I am a high-capacity, innovative, and social senior looking for work
          in a culture that values people. I hope to use my love for fast paced
          and challenging work to provide first class service in order to learn
          additional skills for the workplace.
        </p>
        <br />
        <p>
          As much as I enjoy solving problems and learning new things, I also
          enjoy spending time outdoors, being active, and connecting with
          friends and family. I am always seeking new ways to gain new life
          experiences and find that important to me.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.intro-message > h1 {
  font-size: 3.5rem;
  font-family: "Lato";
}

.intro-message > h3 {
  font-size: 1.5rem;
  font-family: "Open Sans";
}

.bounce {
  animation-name: bounce;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}

.bounceDown {
  animation: bounceDown;
  animation-duration: 1s;
  animation-iteration-count: 1;
}

@keyframes bounce {
  0% {
    opacity: 0;
    transform: scale(0.3) translate3d(0, 0, 0);
  }

  50% {
    opacity: 0.9;
    transform: scale(1.1);
  }

  80% {
    opacity: 1;
    transform: scale(0.89);
  }

  100% {
    opacity: 1;
    transform: scale(1) translate3d(0, 0, 0);
  }
}

@keyframes bounceDown {
  0%,
  20%,
  30% {
    -webkit-transform: translateY(-500px);
    transform: translateY(-500px);
  }

  40% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  50% {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
  }

  60% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }

  70% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
  }

  80% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }

  00% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
</style>
