import { useState } from "react";

interface Resource<T> {
  status: "pending" | "success" | "error";
  promise: Promise<T>;
  result?: T;
  error?: unknown;
}

function createResource<T>(promise: Promise<T>): Resource<T> {
  const resource: Resource<T> = {
    status: "pending",
    promise: promise.then(
      (result) => {
        resource.status = "success";
        resource.result = result;
        return result;
      },
      (error) => {
        resource.status = "error";
        resource.error = error;
        throw error;
      }
    ),
  };
  return resource;
}

function useResource<T>(resource: Resource<T>): T {
  if (resource.status === "pending") {
    throw resource.promise;
  }
  if (resource.status === "error") {
    throw resource.error;
  }
  return resource.result as T;
}

// Create the resource outside the component so it's stable across re-renders
const messageResource = createResource(
  new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("hello, world!");
    }, 3000);
  })
);

export function SuspendedComponent() {
  const message = useResource(messageResource);
  return <div>{message}</div>;
}
