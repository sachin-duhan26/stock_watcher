export const payload = {
    "e": "aggTrade",  // Event type
    "E": 123456789,   // Event time
    "a": 12345,       // Aggregate trade ID
    "p": "0.001",     // Price
    "q": "100",       // Quantity
    "T": 123456785,   // Trade time
    "m": true,        // Is the buyer the market maker?
} as const

export type TradeData = typeof payload;
export type TAttributes = keyof typeof payload;
export type TValues = typeof payload[TAttributes];
  
export const getSymbolValue = (value: TAttributes): string => {
  switch (value) {
    case "e":
      return "EventType"
    case "E":
      return "EventTime"
    case "a":
      return "AggregateTID"
    case "p":
      return "Price"
    case "q":
      return "Quantity"
    case "T":
      return "TradeTime"
    case "m":
      return "buyer"
  }
}

export const getKeyFromSymbol = (value: string): string => {
  switch (value) {
    case "EventType":
      return "e"
    case "EventTime":
      return "E"
    case "AggregateTID":
      return "a"
    case "Price":
      return "p"
    case "Quantity":
      return "q"
    case "TradeTime":
      return "T"
    case "buyer":
      return "m"
  }
  return ""
}
