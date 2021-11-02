simpleCart({
	cartColumns: [
{ attr: "thumb", label: false, view: "image" },
{ attr: "name", label: false, view: "link" },
{ view: "remove", text: false, label: !1 },
{ attr: "price", label: false, view: "harga" },
{ attr: "berat", label: false, view: "berat" },
{ attr: "size", label: false, view: "ukuran" },
{ view: "decrement", label: false },
{ attr: "quantity", label: false, view: "jumlah" },
{ view: "increment", label: false },
{ attr: "totalberat", label: false, view: "totalberat" },
{ attr: "total", label: false, view: "currency" },
{ attr: "link", label: false, view: "linkproduk" },
],
	currency: "IDR",
});
