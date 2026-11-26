import { NodeSDK } from '@opentelemetry/sdk-node'
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http'

let sdk: NodeSDK | null = null

export function initOtel(endpoint?: string): void {
  sdk = new NodeSDK({
    traceExporter: new OTLPTraceExporter({
      url: endpoint ? `${endpoint}/v1/traces` : undefined,
    }),
    instrumentations: [
      getNodeAutoInstrumentations({
        '@opentelemetry/instrumentation-fs': { enabled: false },
      }),
    ],
  })

  sdk.start()

  process.on('SIGTERM', () => {
    sdk
      ?.shutdown()
      .finally(() => process.exit(0))
  })
}