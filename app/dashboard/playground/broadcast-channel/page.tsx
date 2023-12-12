"use client";
import React, { useEffect } from "react";

export default function Page() {
  console.log(`📄 ~ Page ~ Page:`, Page);
  useEffect(() => {
    console.log(`📄 ~ useEffect ~ useEffect:`, useEffect);
    let broadcastChannel: BroadcastChannel;

    function createBroadcastChannel() {
      broadcastChannel = new BroadcastChannel('broadcast');
      broadcastChannel.onmessage = handleMessage;
    }

    function sendMessage(data: any) {
      broadcastChannel.postMessage(data);
    }

    function handleMessage(event: any) {
      console.log('接收到 event', event);
      // TODO: 处理接收到信息后的逻辑
    }

    function resizeEventBind() {
      window.addEventListener('resize', () => {
        const pos = getCurPos();
        sendMessage(pos);
      });
    }

    // 计算当前元素距离显示器窗口右上角的距离
    function getCurPos() {
      const barHeight = window.outerHeight - window.innerHeight;
      const element = document.getElementById('j-main');
      const rect = element?.getBoundingClientRect();

      // 获取元素相对于屏幕左上角的 X 和 Y 坐标
      if (rect) {
        const x = rect.left + window.screenX; // 元素左边缘相对于屏幕左边缘的距离
        const y = rect.top + window.screenY + barHeight;// 元素顶部边缘相对于屏幕顶部边缘的距离

        return [x, y];
      }
    }

    createBroadcastChannel();
    resizeEventBind();

  }, [])

  return (
    <section>
      <h2>BroadcastChannel</h2>
      <h3 id='j-main'>j-main</h3>
    </section>
  )
}
