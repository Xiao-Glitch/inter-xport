<template>
  <div class="comment-container">
    <div class="title">
      <p>共12条评论</p>
    </div>
    <div class="comment-form">
      <div class="content">
        <div class="avatar-box">
          <img src="../assets/avatar.png" alt="">
        </div>
        <div class="comment-input">
          <div class="rich-input">
            <div class="input" contenteditable="true" spellcheck="false" placeholder="输入评论..."></div>
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
</template>

<script>
export default {
  name: 'CommentItem',
  data () {
    return {
      commentInput: ''
    }
  },
  mounted () {
    document.querySelector('.input').addEventListener('focus', (e) => {
      document.querySelector('.submit').style.top = '105px'
      document.querySelector('.submit').style.right = '6px'
    })

    document.querySelector('.input').addEventListener('blur', (e) => {
      document.querySelector('.submit').style.top = '7px'
      document.querySelector('.submit').style.right = '0'
      this.commentInput = e.target.textContent.trim()
      if (!this.commentInput) {
        e.target.textContent = ''
      } else {
        console.log(this.commentInput)
      }
    })
  }
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
    justify-content: space-evenly;
    // align-items: center;
  }

  .avatar-box {
    width: 10vw;
    height: 10vw;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .comment-input {
    position: relative;
    box-sizing: border-box;
    .rich-input {
      margin: 6px auto;
      .input {
        padding: 4px;
        width: 246px;
        height: 18px;
        border-radius: 8px;
        overflow: hidden;
        border: 1px solid #999;
        transition: all .5s;
        &:empty::before {
          content: '请输入评论...';
          position: absolute;
          top: 12px;
          left: 8px;
          color: #999;
          font-size: 12px;
          // pointer-events: none;
        }
        &:focus {
          height: 120px;
          border: 1px solid #999;
          outline-color: #999;
        }
      }
    }
    .action-box {
      .submit {
        height: 16px;
        position: absolute;
        background-color: #1e80ff;
        transition: all .6s;
        border-radius: 8px;
        border-top-left-radius: 0.3px;
        border-bottom-left-radius: 0.3px;
        height: 27px;
        width: 60px;
        top: 7px;
        right: 0;
        span {
          display: inline-block;
          margin: 2px 0;
          width: 60px;
          color: #fff;
          text-align: center;
        }
      }
    }
  }

</style>
