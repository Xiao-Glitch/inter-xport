<template>
  <div class="comment-container">
    <div class="title">
      <p>共12条评论</p>
    </div>
    <div class="comment-form">
      <div class="content">
        <div class="avatar-box">
          <img src="../assets/logo.png" alt="">
        </div>
        <div class="form-box">
          <div class="comment-input">
            <div class="auth-card">
              <div class="input-box">
                <div class="rich-input">
                  <textarea name="" cols="28" rows="5" placeholder="请输入评论内容"></textarea>
                </div>
                <div class="action-box">
                  <div class="submit">
                    <span>发送</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentItem'
}
</script>

<style lang="less" scoped>
  .comment-container {
    // height: 100vh;
    padding: 0 4vw;
  }
  .comment-form {
    height: 50vh;
  }
  .content {
    display: flex;
    justify-content: space-between;
  }

  .avatar-box {
    width: 10vw;
    height: 10vw;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .comment-input {
    box-sizing: border-box;
  }
  .auth-card {
    width: 72vw;
    height: 10vh;
    border: 1px solid transparent;
    border-color: #1e80ff;
    background-color: #f2f3f5;
    .input-box {
      display: flex;
      height: 10vh;
      textarea {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        resize: none;
        padding: 0.5rem;

      }
      span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10vw;
        height: 10vh;
        background-color: #1e80ff;
        color: white;

      }
    }
  }
</style>
