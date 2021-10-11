const startsWithHttps = new RegExp('^(http|https)://', 'i')

export const buildUrlQuery = (params) =>
  Object.entries(params)
    .filter(([key, val]) => val !== undefined && val !== '')
    .map((pair) => pair.map(encodeURIComponent).join('='))
    .join('&')

const isBlob = (input) => 'Blob' in window && input instanceof Blob

export const buildFormData = (body) => {
  const formData = new FormData()
  body !== undefined
    ? Object.entries(body).forEach(([key, val]) => {
        formData.append(
          key,
          typeof val === 'object' && !isBlob(val) ? JSON.stringify(val) : val
        )
      })
    : ''
  return formData
}

export const buildBody = (body) => {
  return body !== undefined
    ? JSON.stringify(
        Object.entries(body)
          .filter(([key, val]) => {
            return val !== undefined
          })
          .reduce((acc, [key, val]) => {
            acc[key] = val
            return acc
          }, {})
      )
    : undefined
}

export const buildUrl = (endpoint, params = {}) => {
  const endpointStartsWithHttps = startsWithHttps.test(endpoint)

  const query = buildUrlQuery(params)
  const baseUrl = endpointStartsWithHttps ? '' : 'https://api.aniapi.com/v1'

  return endpointStartsWithHttps
    ? endpoint
    : query
    ? baseUrl + endpoint + '?' + query
    : baseUrl + endpoint
}

export function request(endpoint, params, options) {
  // const jwt = localStorage.getItem('jwt')
  const withFormData = options?.withFormData || false

  const checkMethods =
    options?.method === 'POST' ||
    options?.method === 'PATCH' ||
    options?.method === 'PUT'

  const url = checkMethods ? buildUrl(endpoint) : buildUrl(endpoint, params)

  const headers = options?.headers
    ? new Headers(options?.headers)
    : new Headers({
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${jwt}`,
      })

  const request = new Request(url, {
    headers,
    body:
      options && options.method !== 'GET'
        ? withFormData
          ? buildFormData(params)
          : buildBody(params)
        : undefined,
    ...options,
  })

  return fetch(request)
    .then((r) => {
      return r.json()
    })
    .catch(async (r) => {
      console.error(r)
    })
}

const defaultQueryFn = async (props) => {
  let fetchUrl = props.queryKey

  if (fetchUrl.length > 1) {
    const [endpoint, params] = fetchUrl
    const paramsString = Object.entries(params)
      .map(([key, val]) => `${key}=${val}`)
      .join('&')
    fetchUrl = endpoint + '?' + paramsString
  }

  return fetcher(fetchUrl)
}
