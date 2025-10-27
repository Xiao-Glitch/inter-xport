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
              <span @click="submitComment">发送</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="comment-contents">
      <div class="content-bar">
        <a class="active" href="JavaScript:">最热</a>
        <a href="JavaScript:">最新</a>
      </div>
      <div class="comment-list">
        <div class="comment-item">
          <div class="comment-avatar">
            <img src="../assets/avatar.png" alt="">
          </div>
          <div class="comment-content">
            <div class="comment-title">
              <div class="comment-title-left">
                <div class="comment-title-name"><span>小李</span></div>
                <div class="comment-title-time"><span>4小时前</span></div>
              </div>
              <div class="comment">
                <div class="contnets">
                  <p>edfggrghrg</p>
                </div>
              </div>
              <div class="comment-title-right">
                <div class="comment-title-like">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'CommentItem',
  data () {
    return {
      commentInput: ''
    }
  },
  methods: {
    submitComment () {
      console.log(this.commentInput)
      this.commentInput = ''
      Toast.success('评论成功')
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
      }
    })
  }
}
</script>

<style lang="less" scoped>
  .comment-container {
    // height: 100vh;
    margin-top: 40px;
    padding: 0 4vw;
  }
  .comment-form {
    height: 100%;
  }
  .content {
    display: flex;
    justify-content: space-evenly;
    // align-items: center;
    .avatar-box {
      margin-right: 10px;
    }
  }

  .comment-contents {
    margin-top: 22px;
    height: 700px;
    .content-bar {
      > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      // margin-left: 20px;
      position: relative;
      transition: all 0.5s;
        &.active {
          color: #1e80ff;
        }
        &:nth-child(1) {
          margin-left: 6px;
          margin-right: 20px;
        }
      }
    }
    .comment-list {
      padding: 12px 0;
      .comment-item {
        display: flex;
        // justify-content: space-evenly;
        .comment-avatar {
          width: 39px;
          height: 39px;
          border-radius: 50%;
          > img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .comment-content {
          margin-left: 10px;
          border: 1px solid #999;
          width: 260px;
          height: 150px;
          // background-color: #1e80ff;
          .comment-title {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            flex: 1;
            .comment-title-left {
              display: flex;
              justify-content: space-between;
              width: 100%;
              padding: 5px;
              margin-bottom: 10px;
            }
            .comment {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }

  .avatar-box {
    width: 39px;
    height: 39px;
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
        top: 6px;
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
