import Hero from "@/components/Home/Hero";
import Nutrients from "@/components/Home/Nutrients";
import RecipeComponent from "@/components/MacroNutrients/Fats";
/*import FatRecipes from "@/components/MacroNutrients/Fats";*/

export default function Home() {
  return (
    <main>
      <Hero/>
      <Nutrients/>
      <RecipeComponent/>
     {/* <FatRecipes/>*/} 
    </main>
  );
}
