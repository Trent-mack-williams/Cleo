const products = [
  {
    _id: "111",
    name: "Body Scrub",
    collection: "Milk & Honey",
    price: "8.50",
    size: "400ml",
    imageArr: ["imgs/incense.jpg", "", ""],
    breifDescription: "Create balance between mind, body & soul",
    fullDescription:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet…feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath",
    ingrediants: "Cinnamon, Ginger, Cloves, Cardamom Seeds, Black Pepper",
    instructions:
      "Apply a small amount of gel and massage gently into the skin before rinsing off with water. Although this is a gentle formulation, it is always better to avoid contact with the eyes.",
    numberOfSale: 350,
    discount: 25
  },
  {
    _id: "112",
    name: "Soap Bar",
    collection: "Milk & Honey",
    price: "3.50",
    size: "400g",
    imageArr: ["imgs/incense.jpg", "", ""],
    breifDescription: "Create balance between mind, body & soul",
    fullDescription:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet…feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath",
    ingrediants: "Cardamom Seeds, Cinnamon, Ginger, Cloves, Black Pepper",
    instructions:
      "Apply a small amount of gel and massage gently into the skin before rinsing off with water. Although this is a gentle formulation, it is always better to avoid contact with the eyes.",
    numberOfSale: 320,
    discount: 0
  },
  {
    _id: "113",
    name: "Body Lotion",
    collection: "Milk & Honey",
    price: "12.00",
    size: "600ml",
    imageArr: ["imgs/incense.jpg", "", ""],
    breifDescription: "Create balance between mind, body & soul",
    fullDescription:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet…feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath",
    ingrediants: "Cinnamon, Ginger, Cloves, Cardamom Seeds, Black Pepper",
    instructions:
      "Apply a small amount of gel and massage gently into the skin before rinsing off with water. Although this is a gentle formulation, it is always better to avoid contact with the eyes.",
    numberOfSale: 200,
    discount: 0
  },
  {
    _id: "114",
    name: "Skin Softener",
    collection: "Milk & Honey",
    price: "8.50",
    size: "350ml",
    imageArr: ["imgs/incense.jpg", "", ""],
    breifDescription: "Create balance between mind, body & soul",
    fullDescription:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet…feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath",
    ingrediants: "Cinnamon, Ginger, Cloves, Cardamom Seeds, Black Pepper",
    instructions:
      "Apply a small amount of gel and massage gently into the skin before rinsing off with water. Although this is a gentle formulation, it is always better to avoid contact with the eyes.",
    numberOfSale: 100,
    discount: 50
  },
  {
    _id: "115",
    name: "Body Wash",
    collection: "Milk & Honey",
    price: "3.50",
    size: "600g",
    imageArr: ["imgs/incense.jpg", "", ""],
    breifDescription: "Create balance between mind, body & soul",
    fullDescription:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet…feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath",
    ingrediants: "Cardamom Seeds, Cinnamon, Ginger, Cloves, Black Pepper",
    instructions:
      "Apply a small amount of gel and massage gently into the skin before rinsing off with water. Although this is a gentle formulation, it is always better to avoid contact with the eyes.",
    numberOfSale: 245,
    discount: 10
  },
  {
    _id: "116",
    name: "Hand Lotion",
    collection: "Milk & Honey",
    price: "12.00",
    size: "300ml",
    imageArr: ["imgs/incense.jpg", "", ""],
    breifDescription: "Create balance between mind, body & soul",
    fullDescription:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet…feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath",
    ingrediants: "Cinnamon, Ginger, Cloves, Cardamom Seeds, Black Pepper",
    instructions:
      "Apply a small amount of gel and massage gently into the skin before rinsing off with water. Although this is a gentle formulation, it is always better to avoid contact with the eyes.",
    numberOfSale: 399,
    discount: 15
  },
  {
    _id: "211",
    name: "Body Scrub",
    collection: "Moss & Clay",
    price: "8.50",
    size: "400ml",
    imageArr: ["imgs/incense.jpg", "", ""],
    breifDescription: "Create balance between mind, body & soul",
    fullDescription:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet…feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath",
    ingrediants: "Cinnamon, Ginger, Cloves, Cardamom Seeds, Black Pepper",
    instructions:
      "Apply a small amount of gel and massage gently into the skin before rinsing off with water. Although this is a gentle formulation, it is always better to avoid contact with the eyes.",
    numberOfSale: 20,
    discount: 80
  },
  {
    _id: "212",
    name: "Soap Bar",
    collection: "Moss & Clay",
    price: "3.50",
    size: "400g",
    imageArr: ["imgs/incense.jpg", "", ""],
    breifDescription: "Create balance between mind, body & soul",
    fullDescription:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet…feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath",
    ingrediants: "Cardamom Seeds, Cinnamon, Ginger, Cloves, Black Pepper",
    instructions:
      "Apply a small amount of gel and massage gently into the skin before rinsing off with water. Although this is a gentle formulation, it is always better to avoid contact with the eyes.",
    numberOfSale: 2000,
    discount: 5
  },
  {
    _id: "213",
    name: "Body Lotion",
    collection: "Moss & Clay",
    price: "12.00",
    size: "600ml",
    imageArr: ["imgs/incense.jpg", "", ""],
    breifDescription: "Create balance between mind, body & soul",
    fullDescription:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet…feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath",
    ingrediants: "Cinnamon, Ginger, Cloves, Cardamom Seeds, Black Pepper",
    instructions:
      "Apply a small amount of gel and massage gently into the skin before rinsing off with water. Although this is a gentle formulation, it is always better to avoid contact with the eyes.",
    numberOfSale: 20,
    discount: 0
  },
  {
    _id: "214",
    name: "Skin Softener",
    collection: "Moss & Clay",
    price: "8.50",
    size: "350ml",
    imageArr: ["imgs/incense.jpg", "", ""],
    breifDescription: "Create balance between mind, body & soul",
    fullDescription:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet…feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath",
    ingrediants: "Cinnamon, Ginger, Cloves, Cardamom Seeds, Black Pepper",
    instructions:
      "Apply a small amount of gel and massage gently into the skin before rinsing off with water. Although this is a gentle formulation, it is always better to avoid contact with the eyes.",
    numberOfSale: 20,
    discount: 0
  },
  {
    _id: "215",
    name: "Body Wash",
    collection: "Moss & Clay",
    price: "3.50",
    size: "600g",
    imageArr: ["imgs/incense.jpg", "", ""],
    breifDescription: "Create balance between mind, body & soul",
    fullDescription:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet…feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath",
    ingrediants: "Cardamom Seeds, Cinnamon, Ginger, Cloves, Black Pepper",
    instructions:
      "Apply a small amount of gel and massage gently into the skin before rinsing off with water. Although this is a gentle formulation, it is always better to avoid contact with the eyes.",
    numberOfSale: 210,
    discount: 0
  },
  {
    _id: "216",
    name: "Hand Lotion",
    collection: "Moss & Clay",
    price: "12.00",
    size: "300ml",
    imageArr: ["imgs/incense.jpg", "", ""],
    breifDescription: "Create balance between mind, body & soul",
    fullDescription:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet…feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath",
    ingrediants: "Cinnamon, Ginger, Cloves, Cardamom Seeds, Black Pepper",
    instructions:
      "Apply a small amount of gel and massage gently into the skin before rinsing off with water. Although this is a gentle formulation, it is always better to avoid contact with the eyes.",
    numberOfSale: 200,
    discount: 0
  }
];

export function getProducts() {
  return products;
}
