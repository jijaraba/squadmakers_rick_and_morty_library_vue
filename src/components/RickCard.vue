<script setup lang="ts">
const props = defineProps(
    {
      name: {type: String, required: true},
      image: {type: String, required: true},
      species: {type: String, required: true},
      alive: {type: Boolean, required: true},
      location: {type: String, required: true},
    }
)
</script>

<template>
  <section class="character_wrapper">
    <div class="character_wrapper__character">
      <div class="character_wrapper__character__image">
        <img :src="props.image" alt="">
      </div>
      <div class="character_wrapper__character__info">
        <div class="character_wrapper__character__info__wrapper">
          <div class="character_wrapper__character__info__status" :class="[props.alive ? 'green' : 'red']"></div>
          <span>{{ props.alive ? 'Alive' : 'Dead' }}</span> -
          <span>{{ props.species }}</span>
        </div>
        <h3>{{ props.name }}</h3>
        <h4>Last known location:</h4>
        <p>{{ props.location }}</p>
        <h4>First seen in::</h4>
      </div>
    </div>

  </section>
</template>

<style scoped lang="scss">
.character_wrapper {
  display: block;
  height: 140px;
  width: 345px;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #E0E0E0;

  &__character {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 100%;

    &__image {
      width: 175px;
      height: 100%;

      img {
        object-fit: cover;
        max-width: 100%;
        max-height: 100%;
      }
    }

    &__info {
      padding: 5px;
      width: 220px;

      &__wrapper {
        display: flex;
        align-items: center;
        gap: 2px;
        justify-content: flex-start;

        & span {
          font: {
            size: 12px;
            weight: 300;
          }
        }
      }

      &__status {
        border-radius: 100%;
        width: 7px;
        height: 7px;

        &.green {
          background-color: #27AE60;
        }

        &.red {
          background-color: #EB5757;
        }
      }

      & h2 {
        color: #FFA726;
      }

      & div {
        color: #616161;
      }

      & h3 {
        font: {
          family: Montserrat,serif;
          size: 17px;
          weight: 300;
        }
        line-height: 19.5px;
      }

      & h4 {
        font: {
          family: Montserrat,serif;
          size: 12px;
          weight: 300;
        }
        line-height: 19.5px;
      }

      & p {
        color: #424242;
        font: {
          family: Montserrat,serif;
          size: 14px;
          weight: 300;
        }
      }
    }
  }
}
</style>
