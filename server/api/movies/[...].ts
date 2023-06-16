export default defineEventHandler((event) => {
  const id = [...(event.node.req.url?.split("/") as string[])].pop();
  const config = useRuntimeConfig();
  return $fetch(`${config.apiBaseUrl}/movie/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
    },
  });
});
