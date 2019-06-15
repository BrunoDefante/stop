var shell = require('shelljs');

// Run migrations
function runMigrations(){
  return new Promise((resolve, reject)=> {
    shell.exec("find 'database/migrations'", {silent:true}, (code, stdout, stderr) => {
      if (!stderr) {
        shell.echo('⇒ Rodando as migrations...');
        shell.exec('adonis migration:run');
        shell.echo('↳ Migrations rodadas ✓\n');
        resolve();
      } else {
        reject('⇒ Aplicação não possui migrations.\n');
      }
    });
  });
}

// Run DB seeds
function runDBSeeds(){
  return new Promise((resolve, reject)=> {
    shell.exec("find 'database/seeds'", {silent:true}, (code, stdout, stderr) => {
      if (!stderr) {
        shell.echo('⇒ Rodando DB Seeds...');
        shell.exec('adonis seed');
        shell.echo('↳ Seeds rodadas ✓\n');
        resolve();  
      } else {
        reject('⇒ Aplicação não possui seeds.\n');
      }
    });
  })
}

// Create .env file
shell.echo('⇒ Criando .env file...');
  if (shell.find('.env.example')) {
    shell.cp('.env.example', '.env');
    shell.echo('↳ .env file criado com sucesso! ✓\n');
    
    runMigrations()
      .then(res => runDBSeeds())
      .then(res => shell.exec("echo 'O setup terminou. Divirta-se! 😉'"))
      .catch(rej => shell.echo(rej))
      .finally(() => shell.echo("FIM"));
  } else {
    shell.echo('Erro: .env.example não existe! Não foi possível criar .env');
  }