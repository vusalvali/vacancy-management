import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Stepper() {
  return (
    <Tabs defaultValue="step1">
      <TabsList className="flex gap-4">
        <TabsTrigger value="step1">Step 1</TabsTrigger>
        <TabsTrigger value="step2">Step 2</TabsTrigger>
        <TabsTrigger value="step3">Step 3</TabsTrigger>
      </TabsList>

      <TabsContent value="step1">
        <p>Content for Step 1</p>
      </TabsContent>
      <TabsContent value="step2">
        <p>Content for Step 2</p>
      </TabsContent>
      <TabsContent value="step3">
        <p>Content for Step 3</p>
      </TabsContent>
    </Tabs>
  );
}

export default Stepper;
