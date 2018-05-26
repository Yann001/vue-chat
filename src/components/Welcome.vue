<template>
  <div class="welcome">
    <h1>{{ title }}</h1>
    <h3>{{ tips }}</h3>
    <input type="text" class="user-name" v-model="userName" @keypress.enter="keyPress" ref="userInput">
  </div>
</template>

<script>
import { isExist } from '@/service/getData';
export default {
  data () {
    return {
      title: 'Welcome to Vue Chat Room',
      tips: 'Please Input Your Name...',
      userName: ''
    };
  },
  methods: {
    async keyPress (e) {
      let httpRes = await isExist({userName: this.userName});
      if (httpRes.code === 200 && httpRes.isExist) {
        alert('user name has existed');
      } else {
        localStorage.setItem('myInfo', JSON.stringify(httpRes.user));
        this.$router.push({
          path: '/chat',
          query: {
            userName: this.userName
          }
        });
      }
    }
  },
  mounted () {
    this.$refs.userInput.focus();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.welcome {
  position: relative;
  width: 100%;
  height: 300px;
  margin: 0 auto;
  top: 50%;
  margin-top: -150px;
  text-align: center;
  .user-name {
    width: 500px;
    margin: 0 auto;
    border: 0;
    border-bottom: 3px solid #42b983;
    background-color: inherit;
    font-size: 28px;
    text-align: center;
    &:focus {
      outline: none;
    }
  }
}
</style>
