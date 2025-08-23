import AdminPage from "@/components/guard/AdminPage";
import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { axiosInstance } from "@/lib/axios";
import { Label } from "@radix-ui/react-label";
import { ChevronLeft, ChevronRight, Edit, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { Link, useSearchParams } from "react-router-dom";

const ProductManagementPage = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [productName, setProductName] = useState("");

  const [hasNextPage, setHasNextPage] = useState(true);

  const [selectedProductIds, setSelectedProductIds] = useState([]);

  const handleNextPage = () => {
    searchParams.set("page", Number(searchParams.get("page")) + 1);

    setSearchParams(searchParams);
  };

  const handlePreviousPage = () => {
    searchParams.set("page", Number(searchParams.get("page")) - 1);

    setSearchParams(searchParams);
  };

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get("/products", {
        params: {
          _per_page: 7,
          _page: Number(searchParams.get("page")),
          name: searchParams.get("search"),
        },
      });

      setHasNextPage(Boolean(response.data.next));

      setProducts(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const searchProduct = () => {
    searchParams.set("search", productName);

    setSearchParams(searchParams);
  };

  const handleDeleteProduct = async () => {
    const shouldDelete = confirm(
      `Are you sure you want to delete ${selectedProductIds.length} product?`
    );

    if (!shouldDelete) return;

    const deletePromises = selectedProductIds.map((productId) => {
      return axiosInstance.delete("/products/" + productId);
    });

    try {
      await Promise.all(deletePromises);

      alert(`Succesfully deleted ${selectedProductIds.length} products!`);

      searchParams.set("page", Number(1));
      setSearchParams(searchParams);

      setSelectedProductIds([]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnCheckedProduct = (productId, checked) => {
    if (checked) {
      const prevSelectedProductIds = [...selectedProductIds];
      prevSelectedProductIds.push(productId);
      setSelectedProductIds(prevSelectedProductIds);
    } else {
      const productIdIndex = selectedProductIds.findIndex((id) => {
        return id == productId;
      });

      const prevSelectedProductIds = [...selectedProductIds];
      prevSelectedProductIds.splice(productIdIndex, 1);
      setSelectedProductIds(prevSelectedProductIds);
    }
  };

  useEffect(() => {
    if (searchParams.get("page")) {
      fetchProducts();
    }
  }, [searchParams.get("page"), searchParams.get("search")]);

  useEffect(() => {
    if (!searchParams.get("page")) {
      searchParams.set("page", 1);

      setSearchParams(searchParams);
    }
  }, []);

  return (
      <div>
        <AdminLayout
          title="Products Management"
          description="Managing our products"
          rightSection={
            <div className="flex gap-2">
              {selectedProductIds.length ? (
                <Button variant="destructive" onClick={handleDeleteProduct}>
                  Delete {selectedProductIds.length} Products
                </Button>
              ) : null}
              <Link to="/admin/products/create">
                <Button>
                  <IoAdd className="h-6 w-6 mr-2" />
                  Add Product
                </Button>
              </Link>
            </div>
          }
        >
          <div className="mb-8">
            <Label>Search Product Name</Label>
            <div className="flex gap-4">
              <Input
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="max-w-[400px]"
                placeholder="Search Products..."
              />
              <Button onClick={searchProduct}>Search</Button>
            </div>
          </div>
          <Table className="p-4 border rounded-md">
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>ID</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => {
                return (
                  <TableRow>
                    <TableCell>
                      <Checkbox
                        onCheckedChange={(checked) =>
                          handleOnCheckedProduct(product.id, checked)
                        }
                        checked={selectedProductIds.includes(product.id)}
                      />
                    </TableCell>
                    <TableCell>{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>
                      Rp {product.price.toLocaleString("id-ID")}
                    </TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      <div className="flex gap-4">
                        <Link to={"/admin/products/edit/" + product.id}>
                          <Button variant="ghost" size="icon">
                            <Edit className="w-6 h-6" />
                          </Button>
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <Button
                  disabled={searchParams.get("page") == 1}
                  onClick={handlePreviousPage}
                  variant="ghost"
                >
                  <ChevronLeft className="w-6 h-6 mr-2" />
                  Previous
                </Button>
              </PaginationItem>

              <PaginationItem className="mx-8 font-semibold">
                Page {searchParams.get("page")}
              </PaginationItem>

              <PaginationItem>
                <Button
                  disabled={!hasNextPage}
                  onClick={handleNextPage}
                  variant="ghost"
                >
                  Next
                  <ChevronRight className="w-6 h-6 ml-2" />
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </AdminLayout>
      </div>
  );
};

export default ProductManagementPage;
