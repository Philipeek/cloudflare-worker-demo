export default {
    async fetch(request) {
        const url = new URL(request.url);

        // Example route: /api/status
        if (url.pathname === "/api/status") {
            return new Response(
                JSON.stringify({
                    status: "ok",
                    message: "Cloudflare Worker demo response"
                }),
                {
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        // Default response
        return new Response("Hello from Cloudflare Worker Demo!");
    }
};
