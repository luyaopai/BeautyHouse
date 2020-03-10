export default {
  data: [
    {
      name: '品牌官网',
      id: 'brand',
      type: [
        {
          country: 'recommend',
          countryname: '推荐品牌',
        }, {
          country: 'china',
          countryname: '国货品牌',
        }, {
          country: 'america',
          countryname: '欧美品牌',
        }, {
          country: 'japan',
          countryname: '日韩品牌',
        },
      ],
      detail: [
        {
          countryid: 'recommend',
          webname: '魅可',
          address: 'https://www.maccosmetics.com.cn',
          imgname: require('../image/web/mac.png'),
          label: ['子弹头', 'chili'],
          desc: '人手一只的子弹头唇膏',
        },
        {
          countryid: 'china',
          webname: '迪奥',
          address: 'https://www.dior.cn/zh_cn',
          imgname: require('../image/web/dior.jpg'),
          label: ['999', '香水'],
          desc: '高质优雅品牌',
        },
        {
          countryid: 'china',
          webname: 'pat',
          address: 'https://www.maccosmetics.com.cn',
          imgname: require('../image/web/pat.png'),
          label: ['子弹头', 'chili'],
          desc: '时尚美妆品牌',
        },
        {
          countryid: 'china',
          webname: '雅诗兰黛',
          address: 'https://www.dior.cn/zh_cn',
          imgname: require('../image/web/esteelauder.jpg'),
          label: ['999', '香水'],
          desc: '美妆品牌No.1雅诗兰黛',
        },
        {
          countryid: 'china',
          webname: '倩碧',
          address: 'https://www.dior.cn/zh_cn',
          imgname: require('../image/web/clinique.jpg'),
          label: ['999', '香水'],
          desc: '经典护肤三步曲',
        },
        {
          countryid: 'china',
          webname: 'colourpop',
          address: 'https://www.dior.cn/zh_cn',
          imgname: require('../image/web/colourpop.png'),
          label: ['999', '香水'],
          desc: '美妆界网红品牌',
        },
        {
          countryid: 'china',
          webname: '悦木之源',
          address: 'https://www.dior.cn/zh_cn',
          imgname: require('../image/web/origin.png'),
          label: ['999', '香水'],
          desc: '菌菇的治愈力量',
        },
        {
          countryid: 'china',
          webname: '海蓝之谜',
          address: 'https://www.dior.cn/zh_cn',
          imgname: require('../image/web/lamer.jpg'),
          label: ['999', '香水'],
          desc: '贵妇护肤一把手',
        },
        {
          countryid: 'china',
          webname: '芭比波朗',
          address: 'https://www.dior.cn/zh_cn',
          imgname: require('../image/web/bobbibrown.png'),
          label: ['999', '香水'],
          desc: '裸妆大师',
        },
        {
          countryid: 'china',
          webname: 'HABA',
          address: 'https://www.dior.cn/zh_cn',
          imgname: require('../image/web/haba.jpg'),
          label: ['999', '香水'],
          desc: '无添加化妆品牌',
        }, {
          countryid: 'china',
          webname: 'ysl',
          address: 'https://www.maccosmetics.com.cn',
          imgname: require('../image/web/ysl.jpg'),
          label: ['子弹头', 'chili'],
          desc: '人手一只的子弹头唇膏',
        },
        {
          countryid: 'china',
          webname: '兰蔻',
          address: 'https://www.dior.cn/zh_cn',
          imgname: require('../image/web/lancome.jpg'),
          label: ['999', '香水'],
          desc: '高质优雅品牌',
        },
        {
          countryid: 'china',
          webname: '姬芮',
          address: 'https://www.maccosmetics.com.cn',
          imgname: require('../image/web/za.jpg'),
          label: ['子弹头', 'chili'],
          desc: '时尚美妆品牌',
        },
        {
          countryid: 'china',
          webname: '古驰',
          address: 'https://www.dior.cn/zh_cn',
          imgname: require('../image/web/gucci.jpg'),
          label: ['999', '香水'],
          desc: '美妆品牌No.1雅诗兰黛',
        },
        {
          countryid: 'japan',
          webname: '卡姿兰',
          address: 'https://www.dior.cn/zh_cn',
          imgname: require('../image/web/kazilan.jpg'),
          label: ['999', '香水'],
          desc: '经典护肤三步曲',
        },
        {
          countryid: 'china',
          webname: 'SK-II',
          address: 'https://www.dior.cn/zh_cn',
          imgname: require('../image/web/skii.jpg'),
          label: ['999', '香水'],
          desc: '高质优雅品牌',
        },
        {
          countryid: 'china',
          webname: '谜尚',
          address: 'https://www.maccosmetics.com.cn',
          imgname: require('../image/web/missha.jpg'),
          label: ['子弹头', 'chili'],
          desc: '时尚美妆品牌',
        },
        {
          countryid: 'china',
          webname: '美宝莲',
          address: 'https://www.dior.cn/zh_cn',
          imgname: require('../image/web/maybeline.jpg'),
          label: ['999', '香水'],
          desc: '美妆品牌No.1雅诗兰黛',
        },
        {
          countryid: 'america',
          webname: '馥蕾诗',
          address: 'https://www.dior.cn/zh_cn',
          imgname: require('../image/web/fresh.jpg'),
          label: ['999', '香水'],
          desc: '经典护肤三步曲',
        },
      ],
    }, {
      name: '电商平台',
      id: 'ecommerce',
      detail: [
        {
          webname: '考拉海购',
          address: 'https://pages.kaola.com',
          img: 'https://cdn.55haitao.com/bbs/data/attachment/store/20191025165928.png@!s140x45',
          desc: '买的放心',
        },
        {
          webname: '唯品会',
          address: 'https://www.vip.com/',
          img: 'https://cdn.55haitao.com/bbs/data/attachment/store/20160608133213.jpg@!s140x45',
          desc: '美妆社区',
        },
      ],
    }, {
      name: '单品推荐',
      id: 'favorite',
      detail: [
        {
          name: '小黑瓶',
          usage: '淡化黑眼圈，抹平眼部皱纹',
          address: 'https://jumei.com',
          desc: '大牌云集',
          pics: [
            'https://jumei.com',
            'https://jumei.com',
            'https://jumei.com',
          ],
        }, {
          name: '小黑瓶',
          usage: '淡化黑眼圈，抹平眼部皱纹',
          address: 'https://jumei.com',
          desc: '大牌云集',
          pics: [
            'https://jumei.com',
            'https://jumei.com',
            'https://jumei.com',
          ],
        },
      ],
    }, {
      name: '美妆博主',
      id: 'blogger',
      detail: [
        {
          name: 'kacoo',
          field: '护肤',
          avatar: 'http://kacoo.com',
          links: [
            {
              platform: '微博',
              address: 'http://kacoo.com',
            }, {
              platform: 'b站',
              address: 'http://kacoo.com',
            },
          ],
        }, {
          name: 'kevin',
          field: '美妆',
          avatar: 'http://kevin.com',
          links: [
            {
              platform: '微博',
              address: 'http://kevin.com',
            }, {
              platform: 'b站',
              address: 'http://kevin.com',
            },
          ],
        },
      ],
    }, {
      name: '护肤技巧',
      id: 'tips',
      detail: [
        {
          desc: '关于卸妆不得不了解的小知识',
          address: 'http://xiezhuang.com',
        }, {
          desc: '关于卸妆不得不了解的小知识',
          address: 'http://xiezhuang.com',
        },
      ],
    }],
};
