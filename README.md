# Guía de Comandos Básicos de Git 📜
Esta guía proporciona una introducción rápida a los comandos básicos de Git y describe el proceso para colaborar en un repositorio utilizando push y pull.

## Instalación de Git
Si aún no tienes Git instalado en tu sistema, puedes descargarlo e instalarlo desde https://git-scm.com/.

## Configuración inicial
Antes de comenzar a trabajar con Git, es importante configurar tu nombre de usuario y dirección de correo electrónico. Puedes hacerlo ejecutando los siguientes comandos en tu terminal:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

## Clonar un repositorio
Para empezar a trabajar en un proyecto existente, necesitas clonar el repositorio a tu máquina local. Utiliza el siguiente comando:


```bash
git clone <url_del_repositorio>
```

## Trabajar en un repositorio
Una vez que hayas clonado el repositorio, puedes realizar cambios en los archivos y carpetas según sea necesario. 

Aquí hay algunos comandos básicos que puedes utilizar:

- git status: Muestra el estado de los archivos en tu directorio de trabajo y en el área de preparación.
- git add <nombre_del_archivo>: Agrega un archivo específico al área de preparación para ser incluido en el próximo commit.
- git commit -m "Mensaje del commit": Crea un nuevo commit con los archivos que están en el área de preparación.
- git push: Sube tus cambios al repositorio remoto.

## Obtener cambios de otros colaboradores
Para obtener los últimos cambios del repositorio remoto y fusionarlos con tu rama local, puedes usar el siguiente comando:

```bash
git pull
```

## Resolución de conflictos
En ocasiones, puede haber conflictos entre los cambios que tú has realizado y los cambios realizados por otros colaboradores. En este caso, Git te pedirá que resuelvas estos conflictos manualmente. Una vez resueltos, puedes crear un nuevo commit para aplicar los cambios.

## Recursos adicionales
[Documentación oficial de Git](https://git-scm.com/doc)