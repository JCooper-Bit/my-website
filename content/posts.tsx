import { post_lars, post_lars_component } from "./posts/lars_from_scratch";
import { post_lars_intro, post_lars_intro_component } from "./posts/lars_intro";
import { post_lars_vec2, post_lars_vec2_component } from "./posts/Vec2_lars";
import { post_lars_vec3, post_lars_vec3_component } from "./posts/Vec3_lars";
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date
  tags: string[];
};

export const posts: Post[] = [
  post_lars_vec2,
  post_lars,
  post_lars_intro,
  post_lars_vec3
];

export const postComponents: any = {
  "lars-vec2-guide": post_lars_vec2_component,
  "linear-algebra-from-scratch": post_lars_component,
  "lars-intro": post_lars_intro_component,
  "lars-vec3-guide": post_lars_vec3_component,
}
