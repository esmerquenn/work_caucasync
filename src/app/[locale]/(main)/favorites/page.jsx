"use client";
import { loadFromCookie } from "@/store/slices/wishlist";
import { Heart, Trash2 } from "lucide-react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "@/store/slices/wishlist";
import { addToBasket } from "@/store/slices/basket";
import { toast } from "sonner";
import React, { useEffect, useState } from "react";
import Parfume from "../../../../assets/img/photo/parfume.png";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
function page() {
  const dispatch = useDispatch();

  const wishlistItems = useSelector((state) => state.wishlist.items);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = wishlistItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.brand?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
    toast.info("Product removed from wishlist");
  };

  const handleAddToBasket = (product) => {
    dispatch(
      addToBasket({
        ...product,
        quantity: 1,
      })
    );
    toast.success("Product added to basket");
  };
  useEffect(() => {
    dispatch(loadFromCookie());
  }, [dispatch]);

  if (wishlistItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <Heart className="w-14 h-14 text-pink-400 mb-4" />
        <h3 className="text-xl font-semibold text-gray-500">Your wishlist is empty</h3>
        <p className="text-gray-400">Add products to your wishlist to see them here</p>
      </div>
    );
  }
  return (
    <div className="wrapper mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold">My Wishlist ({wishlistItems.length})</h1>

        <div className="relative w-full md:w-64">
          <Input
            placeholder="Search in wishlist..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No products found matching your search</p>
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Product</TableHead>
              <TableHead>Brand</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Size</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredItems.map((product) => (
              <TableRow key={`${product.id}-${product.ml}`}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16">
                      <Image src={Parfume} alt={product.title} fill className="object-contain" />
                    </div>
                    <div>
                      <h3 className="font-medium">{product.title}</h3>
                      {product.isNew === "true" && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">New</span>
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{product.brand || "-"}</TableCell>
                <TableCell>{product.gender || "-"}</TableCell>
                <TableCell>
                  {product.discount > 0 ? (
                    <div className="flex flex-col">
                      <span className="text-red-500 font-semibold">
                        {(product.price - (product.price * product.discount) / 100).toFixed(2)} AZN
                      </span>
                      <span className="text-sm text-gray-500 line-through">{product.price} AZN</span>
                    </div>
                  ) : (
                    <span>{product.price} AZN</span>
                  )}
                </TableCell>
                <TableCell>{product.ml}ml</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleAddToBasket(product)}>
                      Add to Cart
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleRemoveFromWishlist(`${product.id}-${product.ml}`)}>
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
    //  <div className="container mx-auto px-4 py-8">
    //   <h1 className="text-2xl font-bold mb-6">My Wishlist ({wishlistItems.length})</h1>

    //   <Table>
    //     <TableHeader>
    //       <TableRow>
    //         <TableHead className="w-[100px]">Product</TableHead>
    //         <TableHead>Price</TableHead>
    //         <TableHead>Size</TableHead>
    //         <TableHead className="text-right">Actions</TableHead>
    //       </TableRow>
    //     </TableHeader>
    //     <TableBody>
    //       {wishlistItems.map((product) => (
    //         <TableRow key={`${product.id}-${product.ml}`}>
    //           <TableCell className="font-medium">
    //             <div className="flex items-center gap-4">
    //               <div className="relative w-16 h-16">
    //                 <Image
    //                   src={Parfume}
    //                   alt={product.title}
    //                   fill
    //                   className="object-contain"
    //                 />
    //               </div>
    //               <div>
    //                 <h3 className="font-medium">{product.title}</h3>
    //                 {product.isNew === "true" && (
    //                   <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
    //                     New
    //                   </span>
    //                 )}
    //               </div>
    //             </div>
    //           </TableCell>
    //           <TableCell>
    //             {product.discount > 0 ? (
    //               <div className="flex flex-col">
    //                 <span className="text-red-500 font-semibold">
    //                   {product.price - (product.price * product.discount / 100)} AZN
    //                 </span>
    //                 <span className="text-sm text-gray-500 line-through">
    //                   {product.price} AZN
    //                 </span>
    //               </div>
    //             ) : (
    //               <span>{product.price} AZN</span>
    //             )}
    //           </TableCell>
    //           <TableCell>{product.ml}ml</TableCell>
    //           <TableCell className="text-right">
    //             <div className="flex justify-end gap-2">
    //               <Button
    //                 variant="outline"
    //                 size="sm"
    //                 onClick={() => handleAddToBasket(product)}
    //               >
    //                 Add to Cart
    //               </Button>
    //               <Button
    //                 variant="ghost"
    //                 size="sm"
    //                 onClick={() => handleRemoveFromWishlist(`${product.id}-${product.ml}`)}
    //               >
    //                 <Trash2 className="w-4 h-4 text-red-500" />
    //               </Button>
    //             </div>
    //           </TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </div>
  );
}

export default page;
