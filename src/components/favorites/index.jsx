import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  IconHeart,
  IconStar,
  IconDisc
} from '@tabler/icons-react';

// 真实音乐数据
const musicData = [
  {
    id: 1,
    title: "大海",
    artist: "张雨生",
    album: "大海",
    year: 1992,
    rating: 9.5,
    cover: "https://pic.imgdd.cc/item/69e37fb4a5aa1df1db796bc8.jpg",
    favorite: true,
    themeColor: "#1e3a5f",
    accentColor: "#4fc3f7"
  },
  {
    id: 2,
    title: "Plastic Love",
    artist: "竹内まりや",
    album: "VARIETY",
    year: 1984,
    rating: 9.6,
    cover: "https://pic.imgdd.cc/item/69e37faea5aa1df1db796b8d.jpg",
    favorite: true,
    themeColor: "#4e4f4e",
    accentColor: "#a7a8a4"
  },
  {
    id: 3,
    title: "我期待",
    artist: "张雨生",
    album: "卡拉OK·台北·我",
    year: 1994,
    rating: 9.4,
    cover: "https://pic.imgdd.cc/item/69e37fcaa5aa1df1db796c63.jpg",
    favorite: true,
    themeColor: "#030303",
    accentColor: "#2d3436"
  },
  {
    id: 4,
    title: "随你",
    artist: "张雨生",
    album: "口是心非",
    year: 1997,
    rating: 9.3,
    cover: "https://pic.imgdd.cc/item/69e37fbea5aa1df1db796c28.jpg",
    favorite: true,
    themeColor: "#79312b",
    accentColor: "#a6672a"
  },
  {
    id: 5,
    title: "カナタハルカ",
    artist: "RADWIMPS",
    album: "铃芽之旅",
    year: 2022,
    rating: 9.2,
    cover: "https://pic.imgdd.cc/item/69e37fcba5aa1df1db796c6b.jpg",
    favorite: true,
    themeColor: "#6dafdd",
    accentColor: "#536dfe"
  },
  {
    id: 6,
    title: "陪你",
    artist: "陶喆",
    album: "Stupid Pop Song",
    year: 2025,
    rating: 9.0,
    cover: "https://pic.imgdd.cc/item/69e37fc7a5aa1df1db796c53.jpg",
    favorite: true,
    themeColor: "#1b3095",
    accentColor: "#b0bec5"
  },
  {
    id: 7,
    title: "就是爱你",
    artist: "陶喆",
    album: "太平盛世",
    year: 2005,
    rating: 9.4,
    cover: "https://pic.imgdd.cc/item/69e38098a5aa1df1db7970fd.jpg",
    favorite: true,
    themeColor: "#4a148c",
    accentColor: "#e1bee7"
  },
  {
    id: 8,
    title: "流沙(Reimagined)",
    artist: "陶喆",
    album: "流沙",
    year: 2023,
    rating: 9.1,
    cover: "https://pic.imgdd.cc/item/69e380a2a5aa1df1db797138.jpg",
    favorite: true,
    themeColor: "#474137",
    accentColor: "#ccb268"
  }
];

const VinylCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSong = musicData[currentIndex];
  const totalSongs = musicData.length;

  // 计算每张唱片在半圆上的位置
  const getVinylPosition = (index) => {
    const angleStep = 36; // 每张唱片间隔36度（半圆放5个）
    const baseAngle = 90; // 正前方
    const relativeIndex = index - currentIndex;
    
    // 处理循环
    let adjustedIndex = relativeIndex;
    if (relativeIndex > totalSongs / 2) adjustedIndex = relativeIndex - totalSongs;
    if (relativeIndex < -totalSongs / 2) adjustedIndex = relativeIndex + totalSongs;
    
    const angle = baseAngle + adjustedIndex * angleStep;
    
    // 只显示半圆范围内的唱片
    if (adjustedIndex < -2 || adjustedIndex > 2) {
      return { isVisible: false };
    }
    
    const radius = 180; // 转盘半径
    
    // 极坐标转直角坐标
    const radian = (angle * Math.PI) / 180;
    const x = Math.cos(radian) * radius;
    const y = Math.sin(radian) * radius * 0.5; // Y轴压缩，形成半圆透视
    
    // 计算缩放：越靠近中心越大
    const distanceFromCenter = Math.abs(adjustedIndex);
    const scale = distanceFromCenter === 0 ? 1.3 : Math.max(0.7, 1.1 - distanceFromCenter * 0.2);
    
    // 计算层级：中心的在最上层
    const zIndex = 10 - distanceFromCenter;
    
    // 透明度：越远的越透明
    const opacity = distanceFromCenter === 0 ? 1 : Math.max(0.4, 1 - distanceFromCenter * 0.3);
    
    return {
      x,
      y,
      scale,
      zIndex,
      opacity,
      isVisible: true
    };
  };

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full py-16 px-4 md:px-8 overflow-hidden">
      {/* 标题 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-[28px] md:text-[32px] font-bold text-gray-900 dark:text-white mb-2">
          我的音乐收藏
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
          点击唱片，探索我的音乐世界
        </p>
      </motion.div>

      {/* 主展示区域 */}
      <div className="max-w-5xl mx-auto">
        <div 
          className="relative rounded-[24px] md:rounded-[32px] overflow-hidden transition-all duration-700"
          style={{ 
            background: `linear-gradient(135deg, ${currentSong.themeColor} 0%, ${currentSong.themeColor}ee 60%, ${currentSong.accentColor}44 100%)`,
            boxShadow: `0 30px 100px -20px ${currentSong.themeColor}66`
          }}
        >
          <div className="flex flex-col lg:flex-row items-center p-10 md:p-10 lg:p-12 gap-8 lg:gap-4">
            
            {/* 左侧：半圆转盘 */}
            <div className="relative w-full lg:w-[50%] flex justify-center items-center">
              {/* 转盘容器 - 固定高度确保一致性 */}
              <div className="relative w-[320px] h-[200px] md:w-[400px] md:h-[240px]">
                {/* 半圆轨道背景 */}
                <div 
                  className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[280px] h-[140px] md:w-[360px] md:h-[180px] rounded-t-full border-2 border-dashed opacity-20"
                  style={{ borderColor: currentSong.accentColor }}
                />
                
                {/* 唱片列表 */}
                <div className="absolute inset-0">
                  {musicData.map((song, index) => {
                    const pos = getVinylPosition(index);
                    const isActive = index === currentIndex;
                    
                    if (!pos.isVisible) return null;
                    
                    return (
                      <motion.div
                        key={song.id}
                        className="absolute left-1/2 bottom-0 cursor-pointer"
                        initial={false}
                        animate={{
                          x: pos.x - 45, // 减去唱片宽度的一半 (90px / 2)
                          y: pos.y - 90, // 减去唱片高度
                          scale: pos.scale,
                          zIndex: pos.zIndex,
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 30
                        }}
                        onClick={() => handleSelect(index)}
                        style={{ opacity: pos.opacity }}
                      >
                        <div 
                          className={`
                            relative w-[90px] h-[90px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden
                            transition-all duration-500
                            ${isActive ? 'ring-[3px] ring-offset-2' : 'hover:ring-2 hover:ring-offset-1'}
                          `}
                          style={{ 
                            ringColor: isActive ? currentSong.accentColor : 'rgba(255,255,255,0.3)',
                            boxShadow: isActive 
                              ? `0 20px 40px -10px ${currentSong.themeColor}aa, 0 0 25px ${currentSong.accentColor}66` 
                              : '0 8px 25px -8px rgba(0,0,0,0.4)'
                          }}
                        >
                          {/* 唱片光泽效果 */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-black/30 z-10 pointer-events-none" />
                          
                          {/* 唱片纹路 */}
                          <div className="absolute inset-[15%] rounded-full border border-white/10 z-10 pointer-events-none" />
                          <div className="absolute inset-[28%] rounded-full border border-white/5 z-10 pointer-events-none" />
                          
                          {/* 中心标签 */}
                          <div 
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 rounded-full z-20 flex items-center justify-center border-2 border-white/20"
                            style={{ backgroundColor: currentSong.themeColor }}
                          >
                            <div className="w-2 h-2 rounded-full bg-white/60" />
                          </div>
                          
                          {/* 封面图 */}
                          <Image
                            src={song.cover}
                            alt={song.title}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        
                        {/* 活跃指示点 */}
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: currentSong.accentColor }}
                          />
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 右侧：简洁歌曲信息 */}
            <div className="w-full lg:w-[50%] lg:pl-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSong.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-white text-center lg:text-left"
                >
                  {/* 顶部标签 */}
                  <div className="flex items-center justify-center lg:justify-start gap-2 md:gap-3 mb-4 md:mb-6">
                    {currentSong.favorite && (
                      <span 
                        className="flex text-white items-center gap-1 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-xs font-semibold"
                        style={{ 
                          backgroundColor: currentSong.accentColor,
                        }}
                      >
                        <IconHeart className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current text-red-500" />
                        收藏
                      </span>
                    )}
                    <span 
                      className="flex items-center gap-1 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-xs font-medium bg-white/15 backdrop-blur-sm"
                    >
                      <IconStar className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current" />
                      {currentSong.rating}
                    </span>
                    <span className="text-xs opacity-60">
                      {currentSong.year}
                    </span>
                  </div>

                  {/* 标题 */}
                  <motion.h3 
                    className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1.5 md:mb-2 leading-tight"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {currentSong.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 opacity-80 font-light"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    {currentSong.artist}
                  </motion.p>

                  {/* 专辑信息 */}
                  <motion.div 
                    className="flex items-center justify-center lg:justify-start gap-2 text-xs md:text-sm opacity-60"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <IconDisc className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span>{currentSong.album}</span>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* 底部指示器 */}
          <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 md:gap-2">
            {musicData.map((song, index) => (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                className="group relative p-1"
              >
                <div 
                  className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: index === currentIndex 
                      ? currentSong.accentColor 
                      : 'rgba(255,255,255,0.3)',
                    transform: index === currentIndex ? 'scale(1.3)' : 'scale(1)'
                  }}
                />
                {/* 悬停提示 */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
                  <span className="text-xs bg-black/70 text-white px-2 py-1 rounded">
                    {song.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* 装饰光晕 */}
          <div 
            className="absolute -top-10 -right-10 md:-top-20 md:-right-20 w-60 h-60 md:w-80 md:h-80 rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ backgroundColor: currentSong.accentColor }}
          />
          <div 
            className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 w-40 h-40 md:w-60 md:h-60 rounded-full opacity-15 blur-3xl pointer-events-none"
            style={{ backgroundColor: currentSong.accentColor }}
          />
        </div>
      </div>
    </div>
  );
};

export default VinylCarousel;
