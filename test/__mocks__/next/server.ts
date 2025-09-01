// Minimal mocks for Next.js server utilities used by tests
// These are not full implementations, just enough for unit tests.

export class NextRequest {
  url: string
  method: string
  headers: Record<string, string>
  private _body?: string

  constructor(url: string, init: { method?: string; body?: any; headers?: Record<string, string> } = {}) {
    this.url = url
    this.method = init.method || 'GET'
    this.headers = init.headers || {}
    if (init.body !== undefined && init.body !== null) {
      this._body = typeof init.body === 'string' ? init.body : JSON.stringify(init.body)
    }
  }

  async json() {
    if (!this._body) return null
    return JSON.parse(this._body)
  }
}

export class NextResponse {
  static json(data: any, init: { status?: number } = {}) {
    const status = init.status ?? 200
    return {
      status,
      async json() {
        return data
      },
    }
  }
}

