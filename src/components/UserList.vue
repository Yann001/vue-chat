<template>
  <div class="user-list">
    <div class="head">User List</div>
    <ul class="list">
      <li class="item" v-for="user in userList" :key="user.id">
        <img :src="user.avatar" alt="user-avatar" class="avatar">
        <div class="user-name">{{user.userName}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['userList']
};
</script>

<style lang="scss" scoped>
.user-list {
  width: 250px;
  height: 100%;
  float: left;
  background-color: #555;
  border-radius: 3px 0px 0px 3px;
  overflow-y: auto;
  >.head {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #eee;
    border-bottom: 1px solid #ccc;
  }
  .list {
    width: 100%;
    height: calc(100% - 50px);
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    .item {
      border-bottom: 1px solid #333;
      padding: 10px;
      cursor: pointer;
      &:hover {
        background-color: #444;
      }
      .avatar {
        float: left;
        width: 40px;
        height: 40px;
        border-radius: 2px;
      }
      .user-name {
        height: 100%;
        margin-left: 45px;
        color: #eee;
      }
    }
  }
}
</style>
