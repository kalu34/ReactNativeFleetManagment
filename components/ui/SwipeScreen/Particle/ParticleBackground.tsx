import React, { useMemo } from "react";
import { Canvas, Points, vec, Group } from "@shopify/react-native-skia";
import { useWindowDimensions, StyleSheet, View } from "react-native";
import { useFrameCallback } from "react-native-reanimated"; // Correct import

const ParticleBackground = () => {
  const { width, height } = useWindowDimensions();
  const COUNT = 500;

  // 1. We use useMemo so the particles aren't recreated on every render
  const particles = useMemo(() => {
    return Array.from({ length: COUNT }).map(() => ({
      pos: vec(Math.random() * width, Math.random() * height),
      vel: vec((Math.random() - 0.5) * 1.5, (Math.random() - 0.5) * 1.5),
    }));
  }, [width, height]);
    
    console.log(particles)

  // 2. This hook runs at 60fps or 120fps depending on the phone
  useFrameCallback(() => {
    particles.forEach((p) => {
      p.pos.x += p.vel.x;
      p.pos.y += p.vel.y;

      // Bounce logic
      if (p.pos.x <= 0 || p.pos.x >= width) p.vel.x *= -1;
      if (p.pos.y <= 0 || p.pos.y >= height) p.vel.y *= -1;
    });
  });

  return (
    <View style={StyleSheet.absoluteFill}>
      <Canvas style={{ flex: 1 }}>
        <Group opacity={0.6}>
          <Points
            points={particles.map((p) => p.pos)}
            mode="points"
            color="#050505"
            strokeWidth={4}
            strokeCap="round"
          />
        </Group>
      </Canvas>
    </View>
  );
};


export default ParticleBackground