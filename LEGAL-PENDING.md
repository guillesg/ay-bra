# Antes de publicar los textos legales

Las tres páginas son borradores y tienen `noindex` en `app/(legal)/layout.tsx`.
Noindex no restringe su acceso público. No publicarlas como textos definitivos.

- Completar titular, NIF, domicilio, registro y datos profesionales aplicables en el aviso legal.
- Confirmar con el titular finalidades, bases jurídicas, conservación, proveedores, destinatarios y transferencias internacionales en privacidad.
- Revisar el despliegue real (hosting/CDN y posibles herramientas añadidas) para verificar cookies y almacenamiento del navegador. La política describe el código actual, sin analítica ni mapa incrustado.
- Validar los textos con el titular o su asesoría; después retirar el aviso de borrador y noindex del layout legal.
- Si se añade analítica o contenido incrustado de terceros, revisar la política e implementar el consentimiento previo, rechazo y revocación antes de cargar los servicios que lo requieran.

Referencias consultadas:
- https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758#a10
- https://www.aepd.es/guias/guia-cookies.pdf
- https://www.aepd.es/derechos-y-deberes/conoce-tus-derechos/derecho-de-informacion

Google Maps se ha sustituido por un enlace externo para evitar cargas de terceros al visitar contacto.
