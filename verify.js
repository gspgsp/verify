;(async () => {
    const VERIFY_URL = 'https://cdn.jsdelivr.net/gh/gspgsp/verify@main/allowed-domains.json'
    const OFFICIAL_SITE = 'https://gspgsp.github.io'

    try {
        const res = await fetch(VERIFY_URL, { cache: 'no-store' })
        const data = await res.json()
        const allowed = data.allowed || []
        const currentHost = location.hostname

        if (!allowed.includes(currentHost)) {
            document.body.innerHTML = `
        <div style="text-align:center;padding-top:40vh;font-size:18px;line-height:1.6">
          ⚠️ 此站点不是官方地址，请访问(This site is not an official address, please visit)<br>
          <a href="${OFFICIAL_SITE}" style="color:#007acc;">${OFFICIAL_SITE}</a>
        </div>`
            setTimeout(() => (location.href = OFFICIAL_SITE), 1000)
        }
    } catch (err) {
        console.error('Domain verification failed:', err)
    }
})()
