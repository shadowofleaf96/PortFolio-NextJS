const rateLimitMap = new Map();

export const checkRateLimit = (req) => {
  const MAX_REQUESTS = 5;
  const WINDOW_MS = 60 * 1000; 

  const ip = req.headers.get('x-forwarded-for') || req.ip || '127.0.0.1';
  const currentTime = Date.now();

  if (rateLimitMap.size > 1000) {
    rateLimitMap.forEach((value, key) => {
      if (currentTime - value.timestamp > WINDOW_MS) {
        rateLimitMap.delete(key);
      }
    });
  }

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, {
      count: 1,
      timestamp: currentTime
    });
    return { limited: false };
  }

  const entry = rateLimitMap.get(ip);
  
  if (currentTime - entry.timestamp > WINDOW_MS) {
    rateLimitMap.set(ip, {
      count: 1,
      timestamp: currentTime
    });
    return { limited: false };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { limited: true };
  }

  rateLimitMap.set(ip, {
    count: entry.count + 1,
    timestamp: entry.timestamp
  });

  return { limited: false };
};