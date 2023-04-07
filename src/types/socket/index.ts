interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: any) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
    hello: () => void;
}
  
