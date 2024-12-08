// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Check } from "lucide-react"

// export default function PricingPage() {
//   const plans = [
//     {
//       name: "Basic",
//       price: "$9.99",
//       description: "Essential features for individuals",
//       features: ["1 user", "5GB storage", "Basic support", "Limited integrations"],
//     },
//     {
//       name: "Pro",
//       price: "$29.99",
//       description: "Advanced features for professionals",
//       features: ["5 users", "50GB storage", "Priority support", "Advanced integrations", "Analytics"],
//     },
//     {
//       name: "Premium",
//       price: "$59.99",
//       description: "Comprehensive solution for teams",
//       features: ["Unlimited users", "500GB storage", "24/7 support", "Custom integrations", "Advanced analytics", "API access"],
//     },
//   ]

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <h1 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {plans.map((plan, index) => (
//           <Card key={index} className={index === 1 ? "border-primary" : ""}>
//             <CardHeader>
//               <CardTitle className="text-2xl">{plan.name}</CardTitle>
//               <CardDescription>{plan.description}</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <p className="text-4xl font-bold mb-4">{plan.price}<span className="text-base font-normal">/month</span></p>
//               <ul className="space-y-2">
//                 {plan.features.map((feature, featureIndex) => (
//                   <li key={featureIndex} className="flex items-center">
//                     <Check className="h-5 w-5 text-green-500 mr-2" />
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </CardContent>
//             <CardFooter>
//               <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
//                 Choose {plan.name}
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }