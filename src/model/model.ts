interface BasicInformation {
  id: string;
  name: string;
  displayName: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

interface User extends BasicInformation {
  email: string;
  phone: string;
  height: number; // cm
  weight: number; // kg
  birth: Date; // cal age
  gender: boolean;
  workout: string; // TDEE
  avatar: string;
}

interface Category extends BasicInformation {
  hasSub: boolean;
  sub: string[];
  slug: string;
  description: string;
  status: boolean;
}

enum PostType {
  vehicle = "VEHICLE",
  blog = "BLOG",
}

interface Post {
  id: string;
  title: string;
  name: string; // camel case
  slug: string; // slugify
  like?: string[];
  likeCount?: number;
  view?: string[];
  viewCount?: number;
  author: string;
  description: string;
  content: string;
  tags: string[]; // categories
  type: PostType;
  hashtags: string; // #food#hanoi => split & render
  thumb: string;
}

interface Comment extends BasicInformation {
  author: string;
  content: string;
  hasSub: boolean;
  sub: string;
}

// cal kcal
interface Daily {
  id: string;
  date: Date;
  user: string;
  total: number; // total kcal from the day
}

interface Meal {
  id: string;
  daily: string; // what date is it
  time: Date; // what time is it?
  image?: string;
  kcal: number; // calories
  ingredients: string[];
}

interface Ingredient extends BasicInformation {
  total: number; // gram, etc..
  calcalories_per_100g: number;
  protein_per_100g: number;
  carbs_per_100g: number;
  fat_per_100g: number;
}

export type { Ingredient, User, Category, Comment, Post, Daily, Meal };
