-- 2) Dado un equipo traer sus estadísticas:
SELECT *
FROM   liga_esp.resultados_deportivos
WHERE  Match(local) against ('+Real+Racing+Club'     IN boolean mode)
OR     match(visitante) against ('+Real+Racing+Club' IN boolean mode);

-- A) Games played by season:
SELECT   Count(*)  AS gamesplayed,
         temporada AS season
FROM     liga_esp.resultados_deportivos
WHERE    Match(local) against ('+Real+Racing+Club'     IN boolean mode)
OR       match(visitante) against ('+Real+Racing+Club' IN boolean mode)
GROUP BY temporada
ORDER BY temporada;

-- B) Games won by season:
SELECT   Count(*)  AS gameswon,
         temporada AS season
FROM     liga_esp.resultados_deportivos
WHERE    Match(local) against ('+Real+Racing+Club' IN boolean mode)
AND      gol_local > gol_visitante
OR       match (visitante) against ('+Real+Racing+Club' IN boolean mode)
AND      gol_local < gol_visitante
GROUP BY temporada
ORDER BY temporada;

-- C) Games lost by season:
SELECT   Count(*)  AS gameslost,
         temporada AS season
FROM     liga_esp.resultados_deportivos
WHERE    Match(visitante) against ('+Real+Racing+Club' IN boolean mode)
AND      gol_local > gol_visitante
OR       match (local) against ('+Real+Racing+Club' IN boolean mode)
AND      gol_local < gol_visitante
GROUP BY temporada
ORDER BY temporada;

-- D) Games tied by season:
SELECT   Count(*)  AS gamestied,
         temporada AS season
FROM     liga_esp.resultados_deportivos
WHERE    Match(local) against ('+Real+Racing+Club' IN boolean mode)
AND      gol_local = gol_visitante
OR       match (visitante) against ('+Real+Racing+Club' IN boolean mode)
AND      gol_local = gol_visitante
GROUP BY temporada
ORDER BY temporada;

-- E) Goals for by season (scored):
WITH total AS
(
       SELECT gol_local AS goalsfor,
              temporada AS season
       FROM   liga_esp.resultados_deportivos
       WHERE  Match(local) against ('+Real+Racing+Club' IN boolean mode)
       UNION ALL
       SELECT gol_visitante AS goalsfor,
              temporada     AS season
       FROM   liga_esp.resultados_deportivos
       WHERE  match (visitante) against ('+Real+Racing+Club' IN boolean mode) )
SELECT   sum(goalsfor) AS goalsfor,
         season
FROM     total
GROUP BY season;


-- F) Goals against by season (conceded):
WITH total AS
(
       SELECT gol_local AS goalsagainst,
              temporada
       FROM   liga_esp.resultados_deportivos
       WHERE  Match(visitante) against ('+Real+Racing+Club' IN boolean mode)
       UNION ALL
       SELECT gol_visitante AS goalsagainst,
              temporada
       FROM   liga_esp.resultados_deportivos
       WHERE  match (local) against ('+Real+Racing+Club' IN boolean mode) )
SELECT   sum(goalsagainst) AS goalsagainst,
         temporada         AS season
FROM     total
GROUP BY season;
