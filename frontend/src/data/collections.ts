export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  colors?: string[];
  sizes?: string[];
  new?: boolean;
}

export interface Collection {
  id: number;
  name: string;
  description: string;
  image: string;
  slug: string;
  tagline: string;
  products: Product[];
}

const collections: Collection[] = [
  {
    id: 1,
    name: "Summer Elegance",
    description: "Lightweight fabrics with timeless cuts for the warmer days",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    slug: "summer-elegance",
    tagline: "Effortless style for sun-drenched days",
    products: [
      {
        id: 101,
        name: "Linen Blend Dress",
        description: "A flowing silhouette crafted from premium linen blend fabric",
        price: 189.99,
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        colors: ["White", "Beige", "Light Blue"],
        sizes: ["XS", "S", "M", "L", "XL"],
        new: true
      },
      {
        id: 102,
        name: "Sleek Summer Blazer",
        description: "Lightweight cotton blazer for breezy summer evenings",
        price: 245.99,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        colors: ["Cream", "Navy", "Sage"],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 103,
        name: "Embroidered Cotton Top",
        description: "Delicate embroidery details on premium cotton",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        colors: ["White", "Blush"],
        sizes: ["XS", "S", "M", "L"]
      },
      {
        id: 104,
        name: "Pleated Linen Trousers",
        description: "Tailored wide-leg trousers in lightweight linen",
        price: 159.99,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        colors: ["Ivory", "Black", "Tan"],
        sizes: ["XS", "S", "M", "L", "XL"]
      },
      {
        id: 105,
        name: "Strappy Sandals",
        description: "Handcrafted leather sandals with gold hardware",
        price: 119.99,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
        colors: ["Tan", "Black"],
        sizes: ["36", "37", "38", "39", "40", "41"]
      },
      {
        id: 106,
        name: "Silk Scarf",
        description: "Luxurious printed silk scarf for versatile styling",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1579480160228-a0efabb7545e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        colors: ["Multicolor"]
      }
    ]
  },
  {
    id: 2,
    name: "Urban Streetwear",
    description: "Contemporary designs with an edge for the modern trendsetter",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    slug: "urban-streetwear",
    tagline: "Bold statements for the city landscape",
    products: [
      {
        id: 201,
        name: "Oversized Graphic Hoodie",
        description: "Premium cotton blend with artistic graphic print",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        colors: ["Black", "Grey", "Navy"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        new: true
      },
      {
        id: 202,
        name: "Cargo Pants",
        description: "Utilitarian design with modern proportions",
        price: 179.99,
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        colors: ["Khaki", "Black", "Olive"],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 203,
        name: "Statement Sneakers",
        description: "Leather and technical fabric mix with chunky sole",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80",
        colors: ["White/Multi", "Black/Red"],
        sizes: ["40", "41", "42", "43", "44", "45"]
      },
      {
        id: 204,
        name: "Tech Windbreaker",
        description: "Water-resistant technical fabric with reflective details",
        price: 219.99,
        image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        colors: ["Black", "Silver"],
        sizes: ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    id: 3,
    name: "Evening Glamour",
    description: "Sophisticated attire for special occasions and night events",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    slug: "evening-glamour",
    tagline: "Make every entrance memorable",
    products: [
      {
        id: 301,
        name: "Sequined Cocktail Dress",
        description: "Dazzling sequin embellishment with elegant silhouette",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=708&q=80",
        colors: ["Black", "Gold", "Silver"],
        sizes: ["XS", "S", "M", "L"],
        new: true
      },
      {
        id: 302,
        name: "Velvet Tuxedo Jacket",
        description: "Luxurious velvet with satin lapels for refined elegance",
        price: 389.99,
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1242&q=80",
        colors: ["Black", "Burgundy", "Navy"],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 303,
        name: "Crystal Embellished Clutch",
        description: "Statement evening bag with premium crystal embellishment",
        price: 169.99,
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
        colors: ["Silver", "Gold", "Black"]
      },
      {
        id: 304,
        name: "Metallic High Heels",
        description: "Striking stilettos with metallic finish",
        price: 229.99,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
        colors: ["Gold", "Silver", "Rose Gold"],
        sizes: ["36", "37", "38", "39", "40"]
      },
      {
        id: 305,
        name: "Statement Earrings",
        description: "Dramatic chandelier design with sparkling crystals",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        colors: ["Silver", "Gold"]
      }
    ]
  },
  {
    id: 4,
    name: "Minimalist Essentials",
    description: "Clean lines and neutral tones for the understated wardrobe",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    slug: "minimalist-essentials",
    tagline: "Refined simplicity for everyday luxury",
    products: [
      {
        id: 401,
        name: "Tailored Wool Coat",
        description: "Timeless silhouette in premium Italian wool",
        price: 449.99,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1736&q=80",
        colors: ["Camel", "Black", "Grey"],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 402,
        name: "Cashmere Sweater",
        description: "Pure cashmere in a relaxed fit",
        price: 239.99,
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=746&q=80",
        colors: ["Beige", "Grey", "Black", "Navy"],
        sizes: ["XS", "S", "M", "L", "XL"],
        new: true
      },
      {
        id: 403,
        name: "Silk Shirt",
        description: "Classic cut in pure silk with subtle sheen",
        price: 179.99,
        image: "https://images.unsplash.com/photo-1626948683848-f4b534ec17f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        colors: ["White", "Black", "Ivory"],
        sizes: ["XS", "S", "M", "L", "XL"]
      },
      {
        id: 404,
        name: "Leather Tote Bag",
        description: "Vegetable-tanned leather with minimal hardware",
        price: 329.99,
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80",
        colors: ["Tan", "Black", "Navy"]
      },
      {
        id: 405,
        name: "Tailored Trousers",
        description: "Straight-leg fit in premium stretch wool blend",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        colors: ["Black", "Navy", "Grey"],
        sizes: ["XS", "S", "M", "L", "XL"]
      },
      {
        id: 406,
        name: "Leather Loafers",
        description: "Hand-crafted with premium calf leather",
        price: 259.99,
        image: "https://images.unsplash.com/photo-1553545985-1e0f4a1210ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
        colors: ["Black", "Brown", "Burgundy"],
        sizes: ["40", "41", "42", "43", "44", "45"]
      }
    ]
  },
  {
    id: 5,
    name: "Autumn Layers",
    description: "Cozy textures and warm hues for the transitional season",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    slug: "autumn-layers",
    tagline: "Embrace the season with warmth and style",
    products: [
      {
        id: 501,
        name: "Wool-Blend Cardigan",
        description: "Cozy oversized knit with textured pattern",
        price: 189.99,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        colors: ["Rust", "Camel", "Forest Green"],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 502,
        name: "Suede Ankle Boots",
        description: "Stacked heel with subtle pointed toe",
        price: 219.99,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
        colors: ["Tan", "Black", "Burgundy"],
        sizes: ["36", "37", "38", "39", "40", "41"]
      },
      {
        id: 503,
        name: "Corduroy Shirt Jacket",
        description: "Versatile layering piece in soft corduroy",
        price: 159.99,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1736&q=80",
        colors: ["Camel", "Burgundy", "Olive"],
        sizes: ["S", "M", "L", "XL"],
        new: true
      },
      {
        id: 504,
        name: "Wool Scarf",
        description: "Soft oversized scarf in premium wool blend",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        colors: ["Plaid", "Solid Grey", "Camel"]
      }
    ]
  },
  {
    id: 6,
    name: "Artisanal Collection",
    description: "Handcrafted details and sustainable materials for the conscious consumer",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    slug: "artisanal",
    tagline: "Sustainable luxury with artisanal craftsmanship",
    products: [
      {
        id: 601,
        name: "Hand-Knit Sweater",
        description: "Artisanal knit in organic cotton and recycled fibers",
        price: 229.99,
        image: "https://images.unsplash.com/photo-1581497396202-5645e76a3a8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        colors: ["Natural", "Indigo", "Terracotta"],
        sizes: ["S", "M", "L", "XL"],
        new: true
      },
      {
        id: 602,
        name: "Vegetable-Tanned Leather Bag",
        description: "Handcrafted from locally sourced leather using traditional techniques",
        price: 349.99,
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80",
        colors: ["Tan", "Dark Brown"]
      },
      {
        id: 603,
        name: "Block-Printed Dress",
        description: "Organic cotton with traditional hand-block printing",
        price: 179.99,
        image: "https://images.unsplash.com/photo-1568153487049-4431a8c15c20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjBwcml0ZWQlMjBkcmVzcyUyMG1vZGVsfGVufDB8fDB8fHww",
        colors: ["Indigo/White", "Black/Natural"],
        sizes: ["XS", "S", "M", "L", "XL"]
      },
      {
        id: 604,
        name: "Artisanal Ceramic Jewelry",
        description: "Handmade ceramic beads with brass elements",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
        colors: ["Earth Tones", "Ocean Blues"]
      },
      {
        id: 605,
        name: "Natural Dyed Silk Scarf",
        description: "Hand-dyed using plant-based colors and traditional techniques",
        price: 139.99,
        image: "https://images.unsplash.com/photo-1566534335938-05f1f2949435?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        colors: ["Botanical", "Indigo Shibori"]
      }
    ]
  }
];

export default collections;

// Helper function to find a collection by slug
export const getCollectionBySlug = (slug: string): Collection | undefined => {
  return collections.find(collection => collection.slug === slug);
};
