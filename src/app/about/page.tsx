import Image from "next/image";

function About() {
  return (
    <div className="flex items-center justify-around w-4/5 m-auto py-20">
      <div className="flex flex-col gap-20 w-1/3">
        <h1 className="text-5xl font-bold">Our History</h1>
        <div className="flex flex-col gap-6">
          <p className="text-base text-justify">Founded in 2015, Magali Store is South America’s leading online pet supply store, with a strong presence in Brazil. Backed by tailored marketing, data, and customer service solutions, Magali Store partners with over 8,000 sellers and 200 brands, serving more than 2 million pet lovers across the region.</p>
          <p className="text-base text-justify">Magali Store offers a selection of over 800,000 products and is growing rapidly. Our catalog includes a wide variety of items, from pet food, toys, and accessories to grooming products and veterinary supplies for dogs, cats, birds, small animals, and more.</p>
        </div>
      </div>
      <Image src={"/aboutUs/aboutus.jpg"} alt="about us" width={"705"} height={"609"} />
    </div>
  )
}

export default About;
