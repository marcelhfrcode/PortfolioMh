const { createApp } = Vue;

createApp({
  data() {
    return {
      menuOpen: false,
      emailCopied: false,
      jobs: [
        {
          role: "Analista de Suporte N2/N3",
          company: "Novi Sistemas | C9 Digital",
          open: false,
          items: [
            "Atendimento N2/N3 em sistema ERP",
            "Consultas SQL em PostgreSQL e Firebird",
            "Testes e validação de funcionalidades",
            "Documentação técnica e apoio à equipe de desenvolvimento",
            "Levantamento e reprodução de bugs",
          ],
        },
        {
          role: "Analista de Implantação",
          company: "Vojitour",
          open: false,
          items: [
            "Atendimento N2/N3 em sistema ERP",
            "Consultas SQL em PostgreSQL e Firebird",
            "Testes e validação de funcionalidades",
            "Documentação técnica e apoio à equipe de desenvolvimento",
            "Levantamento e reprodução de bugs",
          ],
        },
      ],
    };
  },
  methods: {
    copyEmail() {
      try {
        navigator.clipboard.writeText("marcel.hfr1@gmail.com");
        this.emailCopied = true;
        setTimeout(() => (this.emailCopied = false), 1800);
      } catch (e) {
        console.error("Erro ao copiar e-mail:", e);
      }
    },
  },
}).mount("#app");
