import { Button } from "./components/ui/button";
import { ToastAction } from "./components/ui/toast";
import { toast } from "./hooks/use-toast";

function App() {
  return (
    <div className="p-4">
      <Button
        variant="destructive"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up ",
            description: "Friday, February 10, 2023 at 5:57 PM",
            variant: "success",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          });
        }}
      >
        Click me
      </Button>
    </div>
  );
}

export default App;
