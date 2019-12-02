export async function getAssets(asset_id) {
  const space_id = '00vx718welkq'
  const environment_id = 'master'
  const access_token = '8Rbe70zxmgLECv08zW0Y9Tt-ZT0lPJeQfom5yLWR6t4'
  const API_ROOT_PATH = 'https://cdn.contentful.com'

  const url = `${API_ROOT_PATH}/spaces/${space_id}/environments/${environment_id}/assets/${asset_id}?access_token=${access_token}`
  const data = fetch(url, {
    method: 'GET',
  }).then(response => {
    if (response.ok) return response.json()
    else return 'err'
  })

  return data
}
