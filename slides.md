---
highlightTheme: a11y-light
revealOptions:
  backgroundTransition: 'none'
  transition: 'none'
theme: none
title: Deploying PHP applications with Ansible and Ansistrano
---

# Deploying PHP applications with _Ansible, Ansible Vault and Ansistrano_
<!-- .element class="max-w-4xl mx-auto text-6xl font-bold text-center" -->

Note: I work primarily with PHP, and there will be some PHP-isms in this talk (LAMP stack, Composer).

Will be using a Drupal 8 application as the example, but the tools are tool and language agnostic.

~~~~~

## Things we'll be looking at

- _**Ansible**_ crash course
- Keeping secrets with _**Ansible Vault**_
- Deployments with _**Ansistrano**_

~~~~~

<div class="grid grid-cols-5 gap-10">
<div class="grid col-span-4">

- Full Stack Software Developer & System Administrator
- Senior Software Engineer at Inviqa
- Part-time freelancer
- PHP South Wales organiser
- https://www.oliverdavies.uk
- [@opdavies](https://twitter.com/opdavies)

</div>
<div class="col-span-1">

![](https://pbs.twimg.com/profile_images/1203067938183483392/PJoGfCII_400x400.jpg)<!-- .element class="rounded-full" -->
</div>
  
</div>

~~~~~

<div class="flex flex-wrap justify-center space-y-16">
  <div>
    <img
      src="/assets/images/logo-acquia.png"
      alt=""
      class="max-w-lg border-0 shadow-none"
    />
    </div>
    <div>
      <img
        src="/assets/images/logo-platformsh.png"
        alt=""
        class="max-w-lg border-0 shadow-none"
      />
    </div>
    <div>
      <img
        src="/assets/images/logo-pantheon.png"
        alt=""
        class="max-w-lg border-0 shadow-none"
      />
    </div>
</div>

~~~~~

<div class="grid grid-cols-3 gap-12">
  <div class="flex items-center">
    <div>
      <img
        src="/assets/images/logo-digital-ocean.png"
        alt="DigitalOcean logos"
        class="w-full max-w-lg border-0 shadow-none"
      />
    </div>
  </div>
  <div class="flex items-center">
    <div>
      <img
        src="/assets/images/logo-linode.png"
        alt="Linode logo"
        class="w-full max-w-lg border-0 shadow-none"
      />
    </div>
  </div>
  <div class="flex items-center">
    <div>
      <img
        src="/assets/images/logo-vultr.png"
        alt="Vultr logo"
        class="w-full max-w-lg border-0 shadow-none"
      />
    </div>
  </div>
</div>

~~~~~

<!-- .slide: class="section-title" -->

## What is Ansible?

~~~~~

## Ansible is an open-source _software provisioning_, _configuration management_, and _application-deployment_ tool.
<!-- .element class="text-5xl text-center" -->



~~~~~

## What is Ansible?

- CLI tool
- Configured with YAML
- Agentless, connects via SSH
- Jinja2 for templating
- Executes ad-hoc remote commands
- Installs software packages
- Performs deployment steps
- Batteries included

Note:
- Written in Python but configured with Yaml.
- Drupal, Symfony and a lot of other projects use YAML.
- Nothing needed on the server, other than Python.
- First-party modules (SSH keys, file and directory management, package repositories, stopping/starting/restarting services, DO/Linode/AWS integration).

~~~~~

<!-- .slide: class="section-title" -->

## Hosts / Inventories

~~~~~

<pre class="lang-ini"><code class="lang-ini" data-line-numbers data-trim>
[webservers]
192.168.33.10

[webservers:vars]
ansible_ssh_port=22
</code></pre>

~~~~~

<pre><code data-trim data-line-numbers>
---
all:
  children:
    webservers:
      hosts:
        192.168.33.10:
      vars:
        ansible_ssh_port: 22
</code></pre>

~~~~~

<!-- .slide: class="section-title" -->

<h2>Commands</h2>

~~~~~

<!-- .slide: class="text-center bg-black text-white" -->

<pre class="plain">
  <code class="text-5xl">ansible all -i hosts.yml -m ping</code>
</pre>

~~~~~

<!-- .slide: class="bg-black text-white" -->

```plain
webservers | SUCCESS => {
    "ansible_facts": {
        "discovered_interpreter_python": "/usr/bin/python"
    },
    "changed": false,
    "ping": "pong"
}
```
<!-- .element class="text-3xl" -->

~~~~~

<!-- .slide: class="text-center bg-black text-white" -->

<pre class="language-plain whitespace-pre-line">
  <code class="text-5xl" data-trim>
    ansible all -i hosts.yml
    -m command
    -a "git pull
    --chdir=/app"
  </code>
</pre>

~~~~~

<!-- .slide: class="text-center bg-black text-white" -->

<pre class="language-plain whitespace-pre-line wrap-word">
  <code class="text-5xl" data-trim>
    ansible all -i hosts.yml
    -m git
    -a "repo=https://github.com
    /opdavies/dransible
    --chdir=/app"
  </code>
</pre>

~~~~~

<pre><code data-trim data-line-numbers>
---
- hosts: webservers

  vars:
    git_repo: https://github.com/opdavies/dransible

  tasks:
    - name: Update the code
      git:
        repo: '{{ git_repo }}'
        dest: /app
</code></pre>
<!-- .element: class="text-3xl" -->

~~~~~

## Useful links

- https://www.ansible.com
- https://docs.ansible.com/ansible/user_guide/vault.html
- https://github.com/opdavies/ansible-role-drupal-settings
- https://www.ansistrano.com
- https://github.com/opdavies/dransible

~~~~~

## Questions?

- https://www.oliverdavies.uk
- https://twitter.com/opdavies
