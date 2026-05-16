export interface Review {
  id: number;
  productId: number;
  author: string;
  avatar: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
}

// Future API: replace this array with fetch("/api/reviews?productId=X")
export const REVIEWS: Review[] = [
  {
    id: 1, productId: 1,
    author: "James M.", avatar: "https://i.pravatar.cc/48?img=11",
    rating: 5, title: "Best tee I've ever bought",
    comment: "Seriously impressed. The fabric is incredibly soft and it held up after 20+ washes without fading or shrinking. Highly recommend.",
    date: "2025-11-14", verified: true,
  },
  {
    id: 2, productId: 1,
    author: "Carlos R.", avatar: "https://i.pravatar.cc/48?img=22",
    rating: 4, title: "Great quality, runs a bit large",
    comment: "The material feels premium and the stitching is solid. I'd suggest sizing down if you want a fitted look.",
    date: "2025-10-02", verified: true,
  },
  {
    id: 3, productId: 1,
    author: "Sophie L.", avatar: "https://i.pravatar.cc/48?img=33",
    rating: 5, title: "Love the colors",
    comment: "Bought the Navy and it looks exactly like the photo. Fast shipping too!",
    date: "2025-09-19", verified: false,
  },
  {
    id: 4, productId: 2,
    author: "Amir K.", avatar: "https://i.pravatar.cc/48?img=44",
    rating: 4, title: "Sleek and comfortable",
    comment: "The V-neck sits perfectly and doesn't stretch out. Good everyday basic.",
    date: "2025-12-01", verified: true,
  },
  {
    id: 5, productId: 3,
    author: "Tyler B.", avatar: "https://i.pravatar.cc/48?img=55",
    rating: 5, title: "Statement piece",
    comment: "Everyone asks me where I got this. The print is crisp and the oversized fit is spot on. Will be ordering more.",
    date: "2026-01-08", verified: true,
  },
  {
    id: 6, productId: 5,
    author: "Mia P.", avatar: "https://i.pravatar.cc/48?img=66",
    rating: 5, title: "Worth every penny",
    comment: "Got this as a gift and it's now my favourite jacket. The olive colour is stunning in person.",
    date: "2026-02-14", verified: true,
  },
  {
    id: 7, productId: 5,
    author: "Liam T.", avatar: "https://i.pravatar.cc/48?img=77",
    rating: 4, title: "Great jacket, zipper could be smoother",
    comment: "Love the look and fit. The zipper feels slightly stiff but I'm sure it'll loosen with wear.",
    date: "2026-03-05", verified: true,
  },
  {
    id: 8, productId: 7,
    author: "Nora H.", avatar: "https://i.pravatar.cc/48?img=88",
    rating: 5, title: "Incredibly warm",
    comment: "Wore this in -10°C and felt completely fine. The hood is well designed and the pockets are deep.",
    date: "2026-01-22", verified: true,
  },
  {
    id: 9, productId: 8,
    author: "Ethan G.", avatar: "https://i.pravatar.cc/48?img=99",
    rating: 5, title: "A genuine leather masterpiece",
    comment: "The quality is unreal. Already has a lived-in feel and it's only been two weeks. This is a lifetime piece.",
    date: "2025-08-30", verified: true,
  },
  {
    id: 10, productId: 13,
    author: "Sara D.", avatar: "https://i.pravatar.cc/48?img=12",
    rating: 4, title: "Super comfy for daily runs",
    comment: "Lightweight and responsive. Got a lot of compliments on the colourway too.",
    date: "2026-04-10", verified: true,
  },
];

export function getReviewsByProductId(productId: number): Review[] {
  return REVIEWS.filter((r) => r.productId === productId);
}

export function getAverageRating(reviews: Review[]): number {
  if (reviews.length === 0) return 0;
  return reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
}
