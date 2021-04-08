import Mock from "mockjs";
import wechat from "@/assets/wechat.png";
import hashiqi from '@/assets/hashiqi.svg';

Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar:
      "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1114088632,2546545526&fm=26&gp=0.jpg",
    siteTitle: "汉汉的汉室",
    github: "https://github.com/hanhan-tg",
    qq: "1551547222",
    qqQrCode: wechat,
    weixin: "hanhan",
    weixinQrCode: wechat,
    mail: "1551547222@qq.com",
    icp: "黑ICP备666666666号",
    githubName: "hanhan-tg",
    favicon: hashiqi,
  },
});
