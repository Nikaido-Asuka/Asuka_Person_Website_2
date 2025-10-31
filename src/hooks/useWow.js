// hooks/useWow.js
import { useEffect } from 'react';

const useWow = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const WOW = require('wow.js');  // 动态导入 WOW.js
      const wow = new WOW({
        boxClass: 'wow',  // 动画元素的 class 名称
        animateClass: 'animate__animated',  // 动画效果的 class 名称
        offset: 200,  // 启动动画的偏移量
        mobile: true,  // 是否支持移动端
        live: false,  // 是否动态添加动画元素
      });
      wow.init();  // 初始化 WOW.js
    }
  }, []);
};

export default useWow;
