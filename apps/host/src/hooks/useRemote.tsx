import { ComponentType, lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { loadRemote, registerRemotes } from "@module-federation/runtime";

export type RemoteDetails = {
  scope: string;
  module: string;
}

export async function loadRemoteFromService(scope: string) {
  const remoteMap: Record<string, string> = {
    // Load in run time
    "products": "http://localhost:4201/mf-manifest.json",
  };

  return Promise.resolve(remoteMap[scope]);
}

export default function useRemote<T = unknown>({ scope, module }: RemoteDetails): T {
  const LazyComponent = lazy(async () => {
    const remoteUrl = await loadRemoteFromService(scope);

    registerRemotes([{
      name: scope,
      entry: remoteUrl,
    }]);

    return loadRemote<T>(`${scope}/${module}`) as unknown as Promise<{
      default: ComponentType<T>;
    }>;
  });

  // @ts-expect-error
  return (props: any) => (
    <ErrorBoundary fallback={<div>Error!!!</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent {...props} />
      </Suspense>
    </ErrorBoundary>
  );
};