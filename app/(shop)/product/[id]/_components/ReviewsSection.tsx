"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, CheckCircle2 } from "lucide-react";
import { Review, getAverageRating } from "@/lib/data/reviews";

interface ReviewsSectionProps {
  productId: number;
  initialReviews: Review[];
}

export default function ReviewsSection({ productId, initialReviews }: ReviewsSectionProps) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [showForm, setShowForm] = useState(false);
  const [newRating, setNewRating] = useState(5);
  const [newTitle, setNewTitle] = useState("");
  const [newComment, setNewComment] = useState("");

  const averageRating = getAverageRating(reviews);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newComment.trim()) return;

    const newReview: Review = {
      id: Date.now(),
      productId,
      author: "Guest User",
      avatar: "https://i.pravatar.cc/48?u=" + Date.now(),
      rating: newRating,
      title: newTitle,
      comment: newComment,
      date: new Date().toISOString().split("T")[0],
      verified: false,
    };

    setReviews([newReview, ...reviews]);
    setShowForm(false);
    setNewTitle("");
    setNewComment("");
    setNewRating(5);
  };

  return (
    <div id="reviews" className="mt-16 border-t border-border/20 pt-16">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Col: Summary & Write Review Button */}
        <div className="md:w-1/3 space-y-6">
          <div>
            <h2 className="text-2xl font-black text-white mb-2">Customer Reviews</h2>
            <div className="flex items-center gap-3">
              <span className="text-4xl font-black text-white">{averageRating.toFixed(1)}</span>
              <div className="flex flex-col">
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.round(averageRating) ? "fill-amber-400" : "text-white/20"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-white/50">{reviews.length} total reviews</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="w-full py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/10 transition-colors cursor-pointer"
          >
            {showForm ? "Cancel" : "Write a Review"}
          </button>
        </div>

        {/* Right Col: Reviews List & Form */}
        <div className="md:w-2/3 space-y-8">
          {showForm && (
            <form onSubmit={handleSubmit} className="bg-card border border-border/30 rounded-2xl p-6 space-y-4 animate-in fade-in slide-in-from-top-4">
              <h3 className="text-lg font-bold text-white mb-4">Submit your review</h3>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/70">Rating</label>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setNewRating(i + 1)}
                      className="cursor-pointer focus:outline-none"
                    >
                      <Star
                        className={`w-6 h-6 ${i < newRating ? "text-amber-400 fill-amber-400" : "text-white/20"}`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white/70">Review Title</label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-secondary/20 border border-border/50 text-white p-3 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Summarize your experience"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white/70">Review Detail</label>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  rows={4}
                  className="w-full bg-secondary/20 border border-border/50 text-white p-3 rounded-lg focus:outline-none focus:border-primary resize-none"
                  placeholder="What did you like or dislike?"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
              >
                Submit Review
              </button>
            </form>
          )}

          <div className="space-y-6">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div key={review.id} className="border-b border-border/10 pb-6 last:border-0 last:pb-0">
                  <div className="flex items-start gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-secondary shrink-0">
                      <Image src={review.avatar} alt={review.author} fill className="object-cover" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white">{review.author}</span>
                          {review.verified && (
                            <span className="flex items-center gap-1 text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
                              <CheckCircle2 className="w-3 h-3" />
                              Verified Buyer
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-white/40">{review.date}</span>
                      </div>
                      <div className="flex gap-0.5 text-amber-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${i < review.rating ? "fill-amber-400" : "text-white/20"}`}
                          />
                        ))}
                      </div>
                      <h4 className="font-bold text-white text-sm">{review.title}</h4>
                      <p className="text-sm text-white/70 leading-relaxed">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 border border-border/10 rounded-2xl border-dashed">
                <p className="text-white/50">No reviews yet. Be the first to share your experience!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
