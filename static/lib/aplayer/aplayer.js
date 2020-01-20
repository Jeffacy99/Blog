var ap = new APlayer({
    element: document.getElementById('player'),
    narrow: false,
    autoplay: false,
    showlrc: 1,
    mutex: true,
    theme: '#444',
    listmaxheight: '128px',
    music: [{
        title: "等风也等你",
        author: "XIXE",
        url: "http://music.163.com/song/media/outer/url?id=479370549.mp3",
        pic: "http://p1.music.126.net/hy5PnI7ntvAuTmYDDyrbig==/109951162931151633.jpg",
        lrc: "[00:01.97]等风也等你\n[00:06.53]（Just For Hunlu.）\n[00:11.18]演唱:XIXE\n[00:32.39]我记得你每一个模样\n[00:40.12]我踏过你爱的每个地方\n[00:46.60]往事随风去\n[00:50.04]再美的风景 都不及\n[00:55.19]你回眸里那淡淡笑意\n[01:02.11]也许将来某天你会记起\n[01:09.58]年少时的我那样喜欢你\n[01:15.73]我的世界里\n[01:19.39]我的回忆过去 都是你\n[01:24.64]你翘起嘴角真让我着迷\n[01:31.51]给你我所有真心 笑着亲吻你\n[01:38.78]告诉你我的秘密 我很想念你\n[01:46.20]越过人群抱紧你\n[01:49.03]我越过海洋想要告诉你\n[01:54.43]我一直 在这里 等你\n[01:59.98]我等风也等你 \n[02:15.95]我会等待某天再遇见你\n[02:22.70]无论等几年我依然会愿意\n[02:29.78]充满孩子气\n[02:33.21]那样小心翼翼 喜欢你\n[02:39.14]想要告诉世界的小决心\n\n[02:45.41]给你我所有真心 笑着亲吻你\n[02:52.75]告诉你我的秘密 我很想念你\n[03:00.09]越过人群抱紧你 \n[03:02.82]我越过海洋想要告诉你\n[03:08.36]我一直 在这里 等你\n[03:13.87]我等风也等你\n\n[03:17.58]我念念不忘 痴心盼有回想\n[03:23.04]我等过光阴我也等过你\n[03:29.61]你能说声爱我吗\n\n[03:35.41]给你我所有真心 笑着亲吻你\n[03:42.72]告诉你我的秘密 我很想念你\n[03:50.09]越过人群抱紧你\n[03:52.73]我越过海洋想要告诉你\n[04:00.12]我一直 在这里 等你\n[04:05.70]我等风也等你"
    }, {
        title: "可惜我不是他",
        author: "Xun",
        url: "http://music.163.com/song/media/outer/url?id=405343398.mp3",
        pic: "http://p1.music.126.net/BBJvJc0gnA2cj0ogTbgJVQ==/18258490091039818.jpg",
        lrc: "[by:留不住风]\n[00:02.18]当他闭上眼吻你的脸颊\r\n[00:06.38]这画面让我的心在一瞬间崩塌\r\n[00:10.67]看你笑着拥抱他 我的泪水在挣扎\r\n[00:15.36]屋檐下的风铃也笑我太傻\r\n[00:20.36]想变成他 拿他送你的玫瑰花\r\n[00:24.78]想变成他 与你牵手走进月光下\r\n[00:29.35]明知道你爱的是他 还在等你的回答\r\n[00:33.74]我也能陪你走过春秋冬夏\r\n[00:38.66]可惜我不是他 不能和你说话\r\n[00:43.15]漫天的雪花是我对你的牵挂\r\n[00:47.46]你和他还好吗 别再为烦恼而吵架\r\n[00:53.01]只要你幸福我才能够放心得下\r\n[00:57.50]不是他 不能陪你玩耍\r\n[01:00.87]恋人的烟花对我就像是风沙\r\n[01:05.35]你和他走天涯 就请你将我忘了吧\r\n[01:11.76]只要你幸福快乐就算我变不了他\r\n[01:17.18]我不是他\r\n[01:27.72]原来这童话属于你和他\r\n[01:31.90]我在悲伤中融化退出你的年华\r\n[01:36.38]未来沧桑的变化 经历风吹和雨打\r\n[01:40.80]也许有了他你才不会害怕\r\n[01:45.98]想变成他 在你耳边说悄悄话\r\n[01:50.17]想变成他 带你逛遍世界的繁华\r\n[01:54.73]明知道你牵的是他 还在继续的装傻\r\n[01:59.21]用思念伴你走过春秋冬夏\r\n[02:04.28]可惜我不是他 不能和你说话\r\n[02:08.72]漫天的雪花是我对你的牵挂\r\n[02:13.16]你和他还好吗 别再为烦恼而吵架\r\n[02:18.71]只要你幸福我才能够放心得下\r\n[02:22.99]不是他 不能陪你玩耍\r\n[02:26.52]恋人的烟花对我就像是风沙\r\n[02:30.83]你和他走天涯 就请你将我忘了吧\r\n[02:36.55]只要你幸福快乐我就算变不了他\r\n[02:57.41]可惜我不是他 不能和你说话\r\n[03:02.01]漫天的雪花是我对你的牵挂\r\n[03:06.41]你和他还好吗 别再为烦恼而吵架\r\n[03:12.05]只要你幸福我才能够放心得下\r\n[03:16.26]不是他 不能陪你玩耍\r\n[03:19.79]恋人的烟花对我就像是风沙\r\n[03:25.76]他 就请你将我忘了吧\r\n[03:30.04]只要你幸福快乐就算我变不了他\r\n[03:35.64]我不是他\r\n[03:40.87]\r\n"
    }, {
        title: "再没这样的人",
        author: "夏初安",
        url: "http://music.163.com/song/media/outer/url?id=444803490.mp3",
        pic: "http://p1.music.126.net/yUPJNDdo9Q9xpmqx96gP-A==/109951162817970000.jpg",
        lrc: "[00:16.84]因为一个笑容感觉天也变晴了\u3000 \n[00:23.29]就好像阳光，住在你眼中 \n[00:32.12]这种感觉穷尽言辞亦无法形容\u3000 \n[00:38.09]我努力描绘，却仍旧很朦胧 \n[00:44.71]\n[00:45.49]时光走得太快岁月倥偬 \n[00:49.63]我们也都走上各自人生 \n[00:53.50]可是在心里还有那么一个名字 \n[01:00.03]藏得最深，谁要都不肯 \n[01:03.34]\n[01:03.85]再没这样的人，让我爱他至深\u3000\n[01:07.53]捧作掌珍奋不顾身\n[01:11.56]用尽所有忠诚，默默守望直至永恒 \n[01:18.83]看他弯起的唇，和他浅浅笑纹\u3000\n[01:22.51]为他升起璀璨星辰\n[01:26.23]然后悄悄说声：“晚安，做个好梦。” \n[01:34.91]\n[01:37.11]\n[01:45.51]我想这个世界有太多人\u3000\n[01:49.61]都将他小心安放进青春 \n[01:53.24]那些回忆都过分美好不忍触碰 \n[02:00.01]太多温暖，属于那个人\u3000 \n[02:03.50]\n[02:03.93]再没这样的人，让我爱他至深\u3000 \n[02:07.54]捧作掌珍奋不顾身\n[02:11.22]用尽所有忠诚，默默守望直至永恒\n[02:18.77]看他弯起的唇，和他浅浅笑纹\u3000 \n[02:22.44]为他升起璀璨星辰\n[02:26.17]然后悄悄说声：“晚安，做个好梦。”\n[02:33.63]\n[02:34.03]再没这样的人，让我爱他至深 \n[02:37.43]做个信徒穷其一生\n[02:41.21]但望炽热目光，能够代我将他亲吻 \n[02:48.72]吻他旧创伤痕 吻他荣耀勋纹 \n[02:52.57]做他永不倒的支撑 \n[02:56.36]然后看他走远，等他下次回程"
    }, {
        title: "错过",
        author: "梁咏琪",
        url: "http://music.163.com/song/media/outer/url?id=254672.mp3",
        pic: "http://p1.music.126.net/LajhrHuSoTDD-yonnBjveQ==/59373627916920.jpg",
        lrc: "[00:12.700]以为只看小说\xa0就能看到爱的颜色\n[00:18.920]这算是什么生活\n[00:23.590]我们留在自己的沙漠\xa0开始魂不守舍\n[00:30.920]等待时间流过\n[00:36.590]如果你像天气\xa0总对我不冷也不热\n[00:42.970]我不能选择沉默\n[00:47.530]爱情只是个泡沫\xa0脆弱得一触即破\n[00:54.690]你要好好把握\n[01:01.300]错过\xa0我们都有过错\n[01:06.700]在幸福的角落\xa0还要再奢求什么\n[01:12.480]直到一天\xa0遗憾开出它的花朵\n[01:18.380]谁都会明白\xa0从前才是最快乐\n[01:25.420]错过\xa0上天都有过错\n[01:30.500]创造悲欢离合\xa0要我们承担结果\n[01:36.340]每一个人\xa0是另一个人的景色\n[01:42.750]在寂寞的时候\xa0什么比爱更赤裸裸\n[02:17.270]如果你像天气\xa0总对我不冷也不热\n[02:23.950]我不能选择沉默\n[02:28.530]爱情只是个泡沫\xa0脆弱得一触即破\n[02:35.920]你要好好把握\n[02:41.750]错过\xa0我们都有过错\n[02:46.850]在幸福的角落\xa0还要再奢求什么\n[02:53.410]直到一天\xa0遗憾开出它的花朵\n[02:59.280]谁都会明白\xa0从前才是最快乐\n[03:06.410]错过\xa0上天都有过错\n[03:10.870]创造悲欢离合\xa0要我们承担结果\n[03:17.280]每一个人\xa0是另一个人的景色\n[03:23.770]曾经停泊过就已\xa0很值得\n[03:30.400]错过\xa0上天都有过错\n[03:34.850]创造悲欢离合\xa0要我们承担结果\n[03:41.310]每一个人\xa0是另一个人的景色\n[03:47.890]在寂寞的时候\xa0什么比爱更赤裸裸\n[03:59.270]在寂寞的时候\xa0什么比爱更赤裸裸\n"
    }, {
        title: "的",
        author: "兔裹煎蛋卷",
        url: "http://music.163.com/song/media/outer/url?id=32408606.mp3",
        pic: "http://p3.music.126.net/SQF5vSrxTZ5myrmVWxFStQ==/3254554419585268.jpg",
        lrc: "[by:\u6211\u628a\u5fc3\u4e8b\u5bc4\u6d41\u5e74]\n[00:24.01]\u9f99\u8475\u82b1 \u745f\u7d22\u65e0\u58f0\u65e0\u606f\u7684\u98d8\u843d \r\n[00:29.73]\u4f59\u6e29\u70ed \u88ab\u65e0\u58f0\u7684\u9634\u973e\u96e8\u6df9\u6ca1 \r\n[00:35.61]\u8427\u6740\u6f20 \u9611\u73ca\u9b44 \r\n[00:38.57]\u591a\u5c11\u5e74\u5316\u4e3a\u4e00\u62b9 \r\n[00:41.58]\u591a\u5c11\u4eba \u5728\u8857\u89d2\u64e6\u80a9\u9519\u8fc7 \r\n[00:47.30]\u79bb\u522b\u65f6 \u54ed\u558a\u7740 \r\n[00:50.26]\u4e0d\u820d\u7684\u542b\u60c5\u8109\u8109 \r\n[00:53.13]\u4ed6\u4eec\u8bf4 \u8fd9\u662f\u865a\u4f2a\u7684\u5916\u58f3 \r\n[00:59.00]\u6276\u6851\u6811 \u9c7c\u767d\u9e3d \r\n[01:01.82]\u63a9\u9970\u6697\u6de1\u7684\u5f00\u8131 \r\n[01:04.87]\u4f60\u7ec8\u662f \u662f\u6211\u4e00\u76f4\u6ca1\u6709\u9057\u5fd8\u7684 \r\n[01:12.15]\u94f6\u8033\u956f \u5f00\u4e91\u518c \r\n[01:14.91]\u5915\u9633\u8d64\u7ea2\u7684\u4e00\u62b9 \r\n[01:17.82]\u51b7\u7a97\u5bd2 \u51bb\u4f24\u4e86\u522b\u79bb\u6b32\u8a00\u65f6\u7684\u79bb\u62e9 \r\n[01:23.61]\u67af\u6d69\u679d \u82b1\u6447\u66f3 \r\n[01:26.66]\u54ea\u4e2a\u624d\u662f\u4f60\u771f\u6b63 \r\n[01:29.57]\u7231\u7740\u7684 \r\n[01:31.09]\u6211\u4e0d\u77e5\u6240\u63aa \r\n[01:38.36]\u54ea\u4e00\u4e2a \u54ea\u4e00\u4e2a\u624d\u662f\u4f60\u7231\u7740\u7684 \r\n[01:44.10]\u98ce\u6c99\u8fc7 \u6211\u4eec\u5374\u518d\u4e5f\u672a\u89c1\u5230\u8fc7 \r\n[01:49.97]\u4f60\u8ba9\u6211 \u61c2\u5f97\u4e86 \r\n[01:52.94]\u8fc7\u5ba2\u7ec8\u7a76\u662f\u8fc7\u5ba2 \r\n[01:55.75]\u53ea\u4e3a\u4e86 \u542c\u53e5\u9519\u4e86\u5c31\u8fc7\u4e86 \r\n[02:01.46]\u5fae\u7b11\u7684 \u91ca\u6000\u7684 \r\n[02:04.47]\u542c\u4f60\u8bf4\u5bf9\u4e0d\u8d77\u4e86 \r\n[02:07.38]\u6211\u7ec8\u7a76\u662f\u4f60\u6ca1\u6709\u8bb0\u4f4f\u7684 \r\n[02:13.30]\u653e\u5f03\u4e86 \u5931\u53bb\u4e86 \r\n[02:16.11]\u5c31\u522b\u518d\u60f3\u8fc7\u53bb\u7684 \r\n[02:19.06]\u6d41\u6cea\u4e86 \u4e5f\u8981\u9732\u51fa\u5fae\u7b11\u795d\u798f\u7740 \r\n[02:24.88]\u7eb8\u98de\u673a \u94bb\u77f3\u6212 \r\n[02:27.79]\u8fd8\u6709\u4ec0\u4e48\u820d\u4e0d\u5f97 \r\n[02:30.66]\u662f\u771f\u7684 \u79bb\u5f00\u4e86\u4f60\u6211\u8fd8\u53ef\u4ee5\u5f88\u5feb\u4e50 \r\n[02:36.43]\u8001\u5e08\u8bf4 \u9519\u8bef\u7684 \r\n[02:39.50]\u53ea\u80fd\u7b49\u5f85\u88ab\u6df9\u6ca1 \r\n[02:42.92]\u662f\u7b11\u7684\u8fd8\u662f\u6d41\u6cea\u7684 \r\n[03:11.52]\u90a3\u6761\u8def \u4f60\u7ecf\u8fc7 \r\n[03:14.43]\u8db3\u4ee5\u8ba9\u6211\u7740\u4e86\u9b54 \r\n[03:17.35]\u70df\u706b\u843d \r\n[03:18.85]\u7ec8\u7a76\u5173\u4e8e\u4f60\u7684\u56de\u5fc6\u6709\u592a\u591a \r\n[03:23.21]\u7709\u5934\u9501 \u592a\u6267\u7740 \r\n[03:26.07]\u7ea0\u7f20\u5185\u5fc3\u7684\u6495\u626f \r\n[03:28.98]\u4f60\u8bf4\u7684 \r\n[03:30.34]\u6211\u59cb\u7ec8\u8bb0\u7740 \r\n[03:34.76]\u66fe\u7231\u7684 \u4f24\u6211\u7684 \r\n[03:37.76]\u5446\u5728\u547d\u8fd0\u7684\u957f\u6cb3 \r\n[03:40.73]\u7b49\u7740\u88ab \u51b0\u51b7\u7684\u5fae\u7b11\u7684\u6d41\u6cea\u7684\u6df9\u6ca1 \r\n[03:46.40]\u6709\u4e0d\u820d \u88ab\u770b\u7834 \r\n[03:49.36]\u4f60\u5374\u5047\u88c5\u770b\u4e86\u9519 \r\n[03:52.31]\u60b2\u60c5\u6b4c \r\n[03:53.97]\u70d8\u6258\u7740\u60c5\u6b4c \r\n[03:58.14]\u4fdd\u62a4\u8272 \u53c8\u5982\u4f55 \r\n[04:00.99]\u56de\u60f3\u6709\u4f60\u7684\u65f6\u523b \r\n[04:03.96]\u8fd8\u662f\u4f1a \u81ea\u7136\u800c\u7136\u731d\u5fc3\u7684\u4e0d\u653b\u81ea\u7834 \r\n[04:09.63]\u788e\u7684\u676f \u71c3\u7684\u706b \r\n[04:12.59]\u7684\u5b57\u5728\u89d2\u843d\u9ed8\u9ed8 \r\n[04:15.56]\u7ec8\u7a76\u662f \u6ca1\u6709\u8bb0\u4f4f\u7684 "
    }, {
        title: "轨迹",
        author: "徐小薇",
        url: "http://music.163.com/song/media/outer/url?id=28819878.mp3",
        pic: "http://p3.music.126.net/EMS4GE-ojql3azwxXYPT3w==/3264450024433079.jpg",
        lrc: "[00:12.98]\u600e\u4e48\u9690\u85cf\u6211\u7684\u60b2\u4f24\n[00:19.10]\u5931\u53bb\u4f60\u7684\u5730\u65b9\n[00:25.61]\u4f60\u7684\u53d1\u9999\u6563\u7684\u5306\u5fd9\n[00:32.06]\u6211\u5df2\u7ecf\u8ddf\u4e0d\u4e0a\n[00:38.49]\u95ed\u4e0a\u773c\u775b\u8fd8\u80fd\u770b\u89c1\n[00:44.90]\u4f60\u79bb\u53bb\u7684\u75d5\u8ff9\n[00:51.21]\u5728\u6708\u5149\u4e0b\u4e00\u76f4\u627e\u5bfb\u90a3\u60f3\u5ff5\u7684\u8eab\u5f71\n[01:04.48]\u5982\u679c\u8bf4\u5206\u624b\u662f\u82e6\u75db\u7684\u8d77\u70b9\n[01:09.98]\u90a3\u5728\u7ec8\u70b9\u4e4b\u524d\n[01:13.25]\u6211\u613f\u610f\u518d\u7231\u4e00\u904d\n[01:17.25]\u60f3\u8981\u5bf9\u4f60\u8bf4\u7684\n[01:19.89]\u4e0d\u6562\u8bf4\u7684\u7231\n[01:23.52]\u4f1a\u4e0d\u4f1a\u6709\u4eba\u53ef\u4ee5\u660e\u767d\n[01:29.54]\u6211\u4f1a\u53d1\u7740\u5446\u7136\u540e\u5fd8\u8bb0\u4f60\n[01:35.83]\u63a5\u7740\u7d27\u7d27\u95ed\u4e0a\u773c\n[01:42.27]\u60f3\u7740\u90a3\u4e00\u5929\u4f1a\u6709\u4eba\u4ee3\u66ff\n[01:49.10]\u8ba9\u6211\u4e0d\u518d\u60f3\u5ff5\u4f60\n[01:55.10]\u6211\u4f1a\u53d1\u7740\u5446\u7136\u540e\u5fae\u5fae\u7b11\n[02:01.51]\u63a5\u7740\u7d27\u7d27\u95ed\u4e0a\u773c\n[02:07.81]\u53c8\u60f3\u4e86\u4e00\u904d\u4f60\u6e29\u67d4\u7684\u8138\n[02:14.54]\u5728\u6211\u5fd8\u8bb0\u4e4b\u524d\n[02:30.42]\u600e\u4e48\u9690\u85cf\u6211\u7684\u60b2\u4f24\n[02:36.77]\u5931\u53bb\u4f60\u7684\u5730\u65b9\n[02:43.17]\u4f60\u7684\u53d1\u9999\u6563\u7684\u5306\u5fd9\n[02:49.56]\u6211\u5df2\u7ecf\u8ddf\u4e0d\u4e0a\n[02:56.09]\u95ed\u4e0a\u773c\u775b\u8fd8\u80fd\u770b\u89c1\n[03:02.20]\u4f60\u79bb\u53bb\u7684\u75d5\u8ff9\n[03:08.81]\u5728\u6708\u5149\u4e0b\u4e00\u76f4\u627e\u5bfb\u90a3\u60f3\u5ff5\u7684\u8eab\u5f71\n[03:21.81]\u5982\u679c\u8bf4\u5206\u624b\u662f\u82e6\u75db\u7684\u8d77\u70b9\n[03:27.53]\u90a3\u5728\u7ec8\u70b9\u4e4b\u524d\n[03:34.82]\u6211\u613f\u610f\u518d\u7231\u4e00\u904d\n[03:34.68]\u60f3\u8981\u5bf9\u4f60\u8bf4\u7684\n[03:37.69]\u4e0d\u6562\u8bf4\u7684\u7231\n[03:41.11]\u4f1a\u4e0d\u4f1a\u6709\u4eba\u53ef\u4ee5\u660e\u767d\n[03:47.07]\u6211\u4f1a\u53d1\u7740\u5446\u7136\u540e\u5fd8\u8bb0\u4f60\n[03:53.54]\u63a5\u7740\u7d27\u7d27\u95ed\u4e0a\u773c\n[03:59.73]\u60f3\u7740\u90a3\u4e00\u5929\u4f1a\u6709\u4eba\u4ee3\u66ff\n[04:06.86]\u8ba9\u6211\u4e0d\u518d\u60f3\u5ff5\u4f60\n[04:12.96]\u6211\u4f1a\u53d1\u7740\u5446\u7136\u540e\u5fae\u5fae\u7b11\n[04:19.08]\u63a5\u7740\u7d27\u7d27\u95ed\u4e0a\u773c\n[04:25.53]\u53c8\u60f3\u4e86\u4e00\u904d\u4f60\u6e29\u67d4\u7684\u8138\n[04:32.24]\u5728\u6211\u5fd8\u8bb0\u4e4b\u524d\n\n[04:38.34]\u6211\u4f1a\u53d1\u7740\u5446\u7136\u540e\u5fd8\u8bb0\u4f60\n[04:45.05]\u63a5\u7740\u7d27\u7d27\u95ed\u4e0a\u773c\n[04:51.10]\u60f3\u7740\u90a3\u4e00\u5929\u4f1a\u6709\u4eba\u4ee3\u66ff\n[04:58.01]\u8ba9\u6211\u4e0d\u518d\u60f3\u5ff5\u4f60\n[05:03.89]\u6211\u4f1a\u53d1\u7740\u5446\u7136\u540e\u5fae\u5fae\u7b11\n[05:10.25]\u63a5\u7740\u7d27\u7d27\u95ed\u4e0a\u773c\n[05:16.70]\u53c8\u60f3\u4e86\u4e00\u904d\u4f60\u6e29\u67d4\u7684\u8138\n[05:23.50]\u5728\u6211\u5fd8\u8bb0\u4e4b\u524d\n\n[05:29.62]\u5fc3\u91cc\u7684\u773c\u6cea\n[05:32.81]\u6a21\u7cca\u4e86\u89c6\u7ebf\n[05:36.57]\u4f60\u5df2\u5feb\u770b\u4e0d\u89c1"
    }, {
        title: "化身孤岛的鲸",
        author: "不才",
        url: "http://music.163.com/song/media/outer/url?id=448184048.mp3",
        pic: "http://p4.music.126.net/8EkuWEylV23h2YJVtZ26VA==/109951162826296986.jpg",
        lyric: "[00:26.88]我是只化身孤岛的蓝鲸\n[00:29.91]有着最巨大的身影\n[00:34.26]鱼虾在身侧穿行\n[00:38.45]也有飞鸟在背上停\n[00:43.57]我路过太多太美的奇景\n[00:46.78]如同伊甸般的仙境\n[00:50.99]而大海太平太静\n[00:55.50]多少故事无人倾听\n[00:59.56]我爱地中海的天晴\n[01:03.80]爱西伯利亚的雪景\n[01:07.29]爱万丈高空的鹰\n[01:09.14]爱肚皮下的藻荇\n[01:12.16]我在尽心尽力地多情\n[01:15.68]直到那一天\n[01:18.08]那一天\n[01:19.05]你来了\n[01:20.18]你的衣衫破旧\n[01:21.98]而歌声却温柔\n[01:24.46]陪我漫无目的四处漂流\n[01:28.31]我的背脊如荒丘\n[01:30.31]而你却微笑摆首\n[01:33.40]把它当成整个宇宙\n[01:36.76]你与太阳挥手\n[01:38.76]也同海鸥问候\n[01:41.14]陪我爱天爱地的四处风流\n[01:45.07]只是遗憾你终究\n[01:47.17]无法躺在我胸口\n[01:50.00]欣赏夜空最辽阔的不朽\n[01:53.61]把星子放入眸\n[02:03.33]我是只化身孤岛的蓝鲸\n[02:06.43]有着最巨大的身影\n[02:11.15]鱼虾在身侧穿行\n[02:15.35]也有飞鸟在背上停\n[02:20.30]我有着太冷太清的天性\n[02:23.64]对天上的她动过情\n[02:28.12]而云朵太远太轻\n[02:32.13]辗转之后各安天命\n[02:36.36]我未入过繁华之境\n[02:40.58]未听过喧嚣的声音\n[02:44.15]未见过太多生灵\n[02:46.00]未有过滚烫心情\n[02:48.85]所以也未觉大洋正中\n[02:52.42]有多么安静\n[02:54.75]直到\n[02:56.17]遇见你\n[02:57.04]你的衣衫破旧\n[02:58.97]而歌声却温柔\n[03:01.12]陪我漫无目的四处漂流\n[03:05.11]我的背脊如荒丘\n[03:07.37]而你却微笑摆首\n[03:09.84]把它当成整个宇宙\n[03:13.58]你与太阳挥手\n[03:15.80]也同海鸥问候\n[03:17.92]陪我爱天爱地得四处风流\n[03:21.97]只是遗憾你终究\n[03:24.02]无法躺在我胸口\n[03:26.82]欣赏夜空最辽阔的不朽\n[03:30.54]把星子放入眸\n[03:34.98]你的指尖轻柔\n[03:36.68]抚摸过我所有\n[03:38.96]风浪冲撞出的丑陋疮口\n[03:42.91]你眼中有春与秋\n[03:45.12]胜过我见过爱过\n[03:47.89]的一切山川与河流\n[03:51.68]曾以为我肩头\n[03:53.68]是那么的宽厚\n[03:55.79]足够撑起海底那座琼楼\n[03:59.84]而在你到来之后\n[04:01.79]它显得如此清瘦\n[04:04.89]我想给你能奔跑的岸头\n[04:08.47]让你如同王后\n[04:30.86]\n[04:32.86]原曲：谢安琪《我们都被忘了》\n[04:33.86]念白：慕寒\n[04:36.36]贴唱后期：坠一"
    }]

});
ap.init;
