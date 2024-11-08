SELECT *
FROM integrations_log
WHERE status = 'error'
  AND timestamp >= NOW() - INTERVAL 7 DAY;