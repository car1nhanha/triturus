<script lang="ts" setup>
import { technologies, type TechnologyName } from "./tag";

const props = withDefaults(
  defineProps<{
    title: TechnologyName;
    size?: "small" | "large";
  }>(),
  {
    size: "small",
  },
);

const getBackgroundColor = (technologyName: string): string => {
  const technology = technologies.find((tech) => tech.name === technologyName);
  return technology ? technology.background : "#000000";
};

const getTextColor = (technologyName: string): string => {
  const technology = technologies.find((tech) => tech.name === technologyName);
  return technology && technology.color ? technology.color : "#16181d";
};
</script>

<template>
  <div :class="`tag ${props.size}`" :style="{ backgroundColor: getBackgroundColor(title), color: getTextColor(title) }">
    {{ title }}
  </div>
</template>

<style lang="css" scoped>
.tag {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  font-weight: 700;
  line-height: 120%;
  text-align: center;
  color: #16181d;

  text-wrap: nowrap;
}

.tag.large {
  padding: 4px 12px;
  gap: 8px;

  font-size: 16px;
}

.tag.small {
  padding: 2px 8px;
  gap: 8px;

  font-size: 12px;
}
</style>
