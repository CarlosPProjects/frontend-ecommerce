import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle, RefreshCcw } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
            <AlertCircle className="h-10 w-10 text-red-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Payment Unsuccessful
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 mb-4">
            We&apos;re sorry, but your payment could not be processed at this time.
          </p>
          <p className="text-sm text-gray-500">
            If you continue to experience issues, please contact our support
            team.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center gap-4 flex-wrap">
          <Button asChild>
            <Link href="/cart" className="group">
              <RefreshCcw className="mr-2 h-4 w-4 group-hover:animate-spin" />
              Try Again
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
