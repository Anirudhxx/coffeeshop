FROM node:latest AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npx prisma generate

FROM node:latest
WORKDIR /app
COPY package.json .
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/models ./models
COPY --from=build /app/routes ./routes
COPY --from=build /app/controllers ./controllers
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/config ./config
COPY --from=build /app/app.js ./app.js
COPY --from=build /app/.env ./.env
ENTRYPOINT ["npm", "run", "start"]

